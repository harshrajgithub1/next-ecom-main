// i18n.js

const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'En',
  otherLanguages: ['De', 'Fr', 'It'],
  localePath: 'public/locales', // or 'static/locales' depending on your project structure
});
