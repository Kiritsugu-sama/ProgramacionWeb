import { LoginTranslations, loginTranslations as loginEsEn, defaultLoginTranslations } from "./dictionary/login";
import { HomeTranslations, homeTranslations as homeEsEn, defaultHomeTranslations } from "./dictionary/home";
import { SettingsTranslations, settingsTranslations as settingsEsEn, defaultSettingsTranslations } from "./dictionary/settings";
import { ProfileTranslations, profileTranslations as profileEsEn, defaultProfileTranslations } from "./dictionary/profile";
import { RoutineTranslations, routineTranslations as routineEsEn, defaultRoutineTranslations } from "./dictionary/routine"; 

export interface TranslationsType
  extends LoginTranslations,
    HomeTranslations,
    SettingsTranslations,
    ProfileTranslations,
    RoutineTranslations {} 

export const defaultTranslations: TranslationsType = {
  ...defaultLoginTranslations,
  ...defaultHomeTranslations,
  ...defaultSettingsTranslations,
  ...defaultProfileTranslations,
  ...defaultRoutineTranslations,
};

export const translations: Record<"es" | "en", TranslationsType> = {
  es: {
    ...loginEsEn.es,
    ...homeEsEn.es,
    ...settingsEsEn.es,
    ...profileEsEn.es,
    ...routineEsEn.es,
  },
  en: {
    ...loginEsEn.en,
    ...homeEsEn.en,
    ...settingsEsEn.en,
    ...profileEsEn.en,
    ...routineEsEn.en,
  },
};
