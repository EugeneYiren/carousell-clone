import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locale/en.json'
import zh from './locale/zh.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      zh: {
        translation: zh,
      },
    },
    lng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
