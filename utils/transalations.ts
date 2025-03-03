import { LoginTranslations, loginTranslations as loginEsEn, defaultLoginTranslations } from './dictionary/login';

export interface TranslationsType extends LoginTranslations {}

export const defaultTranslations: TranslationsType = {
  ...defaultLoginTranslations,
};

export const translations: Record<'es' | 'en', TranslationsType> = {
  es: {
    ...loginEsEn.es
  },
  en: {
    ...loginEsEn.en,
  },
};