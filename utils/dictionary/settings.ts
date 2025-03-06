export interface SettingsTranslations {
    settings_title: string;
    settings_language: string;
    settings_darkMode: string;
    settings_logout: string;
  }
  
  export const defaultSettingsTranslations: SettingsTranslations = {
    settings_title: "settings_title",
    settings_language: "settings_language",
    settings_darkMode: "settings_darkMode",
    settings_logout: "settings_logout",
  };
  
  export const settingsTranslations: Record<"es" | "en", SettingsTranslations> = {
    es: {
      settings_title: "Configuraciones",
      settings_language: "Idioma:",
      settings_darkMode: "Modo Oscuro",
      settings_logout: "Cerrar Sesión",
    },
    en: {
      settings_title: "Settings",
      settings_language: "Language:",
      settings_darkMode: "Dark Mode",
      settings_logout: "Log Out",
    },
  };
  