import i18n from 'i18next';
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from '../../../public/locales/fr.json'
import en from '../../../public/locales/en.json'

i18n.use(initReactI18next).use(LanguageDetector).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    resources: {
        fr: fr,
        en: en
    },
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false
    },
    debug: true,
})