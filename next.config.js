const { i18n } = require('next-i18next');

const nextConfig = {
  // Use 'domains' instead of 'path' if you want to specify domains
  // domains: [
  //   "http://165.232.130.162/",
  //   // "images.example.com",
  // ]

  // Use 'images' or another suitable property if you want to specify paths
  images: {
    // Your image-related configuration here
  }
};


module.exports = {
    i18n: {
      defaultLocale: 'en',  //website default Language
      locales: ['en', 'de', 'it', 'fr'],
    },
  };