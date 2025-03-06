import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

type User = {
  email: string;
  nombreCompleto: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  token: string;
} | null;

const AuthContext = createContext<{
  user: User;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  token: string | null;
} | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          const parsedUser: User = JSON.parse(storedUser);
          setUser(parsedUser);
          setToken(parsedUser?.token ?? null);
          router.replace("/home");
        }
      } catch (error) {
        console.error("Error cargando el usuario desde AsyncStorage", error);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string) => {
    try {
      const isValidEmail = email.endsWith(".edu");

      if (!isValidEmail) {
        alert("Solo correos .edu pueden ingresar");
        return;
      }

      const fakeToken = "123456789abcdef";
      const usuario: User = {
        email,
        nombreCompleto: "Alvaro Reyes",
        edad: 23,
        sexo: "Masculino",
        estadoCivil: "Soltero",
        token: fakeToken,
      };

      await AsyncStorage.setItem("user", JSON.stringify(usuario));

      setUser(usuario);
      setToken(fakeToken);

      router.replace("/home");
    } catch (error) {
      console.error("Error en el login con AsyncStorage", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");

      setUser(null);
      setToken(null);

      // Redirigir a la pantalla de login
      router.replace("/login");
    } catch (error) {
      console.error("Error en el logout con AsyncStorage", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};
