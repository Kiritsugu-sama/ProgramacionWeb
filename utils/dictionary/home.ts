export interface HomeTranslations {
    login: string;
    logout: string;
  }
  
  export const defaultAuthTranslations: HomeTranslations = {
    login: "login",
    logout: "logout",
  };
  
  export const authTranslations: Record<"es" | "en", HomeTranslations> = {
    es: {
      login: "Ingresar",
      logout: "Cerrar sesión",
    },
    en: {
      login: "Sign In",
      logout: "Log Out",
    },
  };
  