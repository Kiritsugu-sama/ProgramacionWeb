export interface HomeTranslations {
  home_welcome: string;
  home_greeting: string;
  home_subtitle: string;
}

export const defaultHomeTranslations: HomeTranslations = {
  home_welcome: "home_welcome",
  home_greeting: "home_greeting",
  home_subtitle: "home_subtitle",
};

export const homeTranslations: Record<"es" | "en", HomeTranslations> = {
  es: {
    home_welcome: "¡Hola, ",
    home_greeting: "Bienvenido a GymTasks",
    home_subtitle: "Tu app para gimanasio",
  },
  en: {
    home_welcome: "Hello, ",
    home_greeting: "Welcome to GymTasks",
    home_subtitle: "Your app for gym",
  },
};
