export interface LoginTranslations {
  login_welcome: string;
  login_login: string;
  login_logout: string;
  login_signInWithGoogle: string;
  login_noAccountRegister: string;
  login_email:string;
}

export const defaultLoginTranslations: LoginTranslations = {
  login_welcome: "login_welcome",
  login_login: "login_login",
  login_logout: "login_logout",
  login_signInWithGoogle: "login_signInWithGoogle",
  login_noAccountRegister: "login_noAccountRegister",
  login_email: 'login_email'
};

export const loginTranslations: Record<"es" | "en", LoginTranslations> = {
  es: {
    login_welcome: "Bienvenido a GymTasks",
    login_login: "Ingresar",
    login_logout: "Cerrar sesión",
    login_signInWithGoogle: "Ingresar con Google",
    login_noAccountRegister: "¿No tienes cuenta? Regístrate",
    login_email: 'Correo electrónico'
  },
  en: {
    login_welcome: "Welcome to GymTasks",
    login_login: "Sign In",
    login_logout: "Log Out",
    login_signInWithGoogle: "Sign In with Google",
    login_noAccountRegister: "Don't have an account? Register",
    login_email: 'Email'
  },
};
