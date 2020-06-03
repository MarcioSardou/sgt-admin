import polyglotI18nProvider from 'ra-i18n-polyglot';
import translation from "./translation";

export default polyglotI18nProvider(locale => 
  translation,
  'pt' // Default locale
);