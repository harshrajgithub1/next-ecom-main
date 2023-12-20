// import enTranslations from '../locale/en.json';
// import deTranslations from '../locale/de.json';
// import frTranslations from '../locale/fr.json';
// import itTranslations from '../locale/it.json';

// function getTranslations(lang) {
//   if (lang === 'en') {
//     return enTranslations;
//   }
//   if (lang === 'de') {
//     return deTranslations;
//   }
//   if (lang === 'fr') {
//     return frTranslations;
//   }
//   if (lang === 'it') {
//     return itTranslations;
//   }
// }

// // Example usage:
// // const translations = getTranslations('en');
// // console.log(translations);


export default function translate(key) {
    try {
      const translations = getTranslations('en')
      if (translations[key]) {
        return translations[key]
      } else {
        throw 'Key not found'
      }
    } catch(error){
      throw `Unable to get trasnslation content for ${key}`
    }
   }