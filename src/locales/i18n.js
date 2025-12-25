import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar traducciones desde archivos JSON
import translationEN from './en/translation.json';
import translationES from './es/translation.json';
import translationFR from './fr/translation.json';
import translationPT from './pt/translation.json';

// Recursos de traducción
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  fr: {
    translation: translationFR
  },
  pt: {
    translation: translationPT
  }
};

// Detectar idioma guardado o usar navegador
const savedLanguage = localStorage.getItem('language');
const browserLanguage = navigator.language.split('-')[0]; // 'es-CO' -> 'es'

// Determinar idioma por defecto
const getDefaultLanguage = () => {
  if (savedLanguage && resources[savedLanguage]) {
    return savedLanguage;
  }
  
  // Verificar si el idioma del navegador está soportado
  if (resources[browserLanguage]) {
    return browserLanguage;
  }
  
  // Fallback a inglés
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDefaultLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    },
    react: {
      useSuspense: false // Evitar problemas de carga
    }
  });

export default i18n;