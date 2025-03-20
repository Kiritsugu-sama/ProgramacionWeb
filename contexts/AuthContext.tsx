// contexts/AuthContext.tsx
import { createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { setUserData, clearUserData } from "@/store/slices/userSlice";
import { useRouter } from "expo-router";

const AuthContext = createContext<{
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
} | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const login = async (email: string) => {
    if (!email.endsWith(".edu")) {
      alert("Solo correos .edu pueden ingresar");
      return;
    }

    const fakeToken = "123456789abcdef";
    const usuario = {
      email,
      nombreCompleto: "Alvaro Reyes",
      edad: 23,
      sexo: "Masculino",
      estadoCivil: "Soltero",
      token: fakeToken,
    };

    dispatch(setUserData(usuario));

    router.replace("/home");
  };

  const logout = async () => {
    dispatch(clearUserData());
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
