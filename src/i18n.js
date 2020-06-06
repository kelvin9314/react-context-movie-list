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
  fallbackLng: 'zh-TW',
  whitelist: ['en-US', 'zh-TW'],
  debug: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
})

export default i18n
