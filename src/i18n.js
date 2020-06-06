import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import twTrans from './asset/locales/zh-TW.json'
import enTrans from './asset/locales/en-US.json'

const resources = {
  'en-US': {
    translation: {
      ...enTrans,
    },
  },
  'zh-TW': {
    translation: {
      ...twTrans,
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.lang || 'zh-US',
  fallbackLng: 'zh-TW',
  whitelist: ['en-US', 'zh-TW'],
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
})

export default i18n
