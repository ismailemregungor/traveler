import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Sign Up': 'Sign Up',
        'Password mismatch': 'Password mismatch',
        'Display Name': 'Display Name',
        'User Name': 'User Name',
        Password: 'Password',
        'Password Repeat': 'Password Repeat',
      },
    },
    tr: {
      translation: {
        'Sign Up': 'Kayıt Ol',
        'Password mismatch': 'Şifreler eşleşmiyor',
        'Display Name': 'Görünen Ad',
        'User Name': 'Kullanıcı Adı',
        Password: 'Şifre',
        'Password Repeat': 'Şifre Tekrar',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
