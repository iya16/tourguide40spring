// import i18n from "i18next";
// import HttpBackend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";


// import en from './locales/en.json';
// import fr from './locales/fr.json';

// const apiKey = "-761F68RtyN4UbRB89cJXQ";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

// i18n
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({

//     backend: {
//       loadPath: '/locales/{{lng}}.json' // Path to your translation files
//     },
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false // React already safes from xss
//     }

        


//     // resources: {
//     //   en: {
//     //     translation: en
//     //   },
//     //   fr: {
//     //     translation: fr
//     //   }
//     // },


//     // fallbackLng: "en",
//     // interpolation: {
//     //   escapeValue: false // react already safes from xss
//     // }


//           // fallbackLng: "en",
//           // debug: true,

//     // ns: ["default"],
//     // defaultNS: "default",
//     // interpolation: {
//     //     escapeValue: false
//     // }

//     // supportedLngs: ["en","am","zh","ar","ru","fr","ro","es","el","it"],
    
//     // backend: {
//     //   loadPath: loadPath
//     // }

//   })
//   export default i18n;


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n 
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        en: {
          translation: require('./locales/en/translation.json')
        },
        lv: {
          translation: require('./locales/lv/translation.json')
        },
        es: {
          translation: require('./locales/es/translation.json')
        },
        // Add other languages here...
      },

    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false // React already does escaping
      }

});
export default i18n;
