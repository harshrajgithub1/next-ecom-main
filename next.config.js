// /** @type {import('next').NextConfig} */


// const nextConfig = {
//     path: {
//     // domains: [
//     //     "http://165.232.130.162/",
//     //     // "images.example.com",
//     // ]
// }}

// module.exports = nextConfig


// const { i18n } = require('next-i18next');

// module.exports = {
//   i18n,
//   // Other Next.js configurations...
// };




/** @type {import('next').NextConfig} */

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
      defaultLocale: 'en',
      locales: ['en', 'de', 'it', 'fr'],
    },
  };