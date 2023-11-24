// // i18n.js
// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
// const NextI18Next = require('next-i18next').default;

// // module.exports = new NextI18Next({
// //   defaultLanguage: 'En',
// //   otherLanguages: ['De', 'Fr', 'It'],
// //   localePath: 'public/locales', // or 'static/locales' depending on your project structure
// // });


// i18n.use(initReactI18next).init({
//   resources: {}, // Where we're gonna put translations' files
//   lng: "en",
//   lng:"de",     // Set the initial language of the App
//   lng:"fr",

//   lng:"it"
      
// });




import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from './app/locale/en.json'
import deJSON from './app/locale/de.json'
import frJSON from './app/locale/fr.json'
import itJSON from './app/locale/it.json'
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    de: { ...deJSON },
    fr: { ...frJSON },
    it: { ...itJSON },
  },
  lng: "en",
});