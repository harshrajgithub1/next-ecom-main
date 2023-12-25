'use client';
import React from 'react';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import '../public/assets/css/flaticon.css'
import '../public/assets/css/jkiticon.css'
import '../public/assets/css/menu.css'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/style.min.css'
import '../public/assets/css/responsive.css'
import '../public/assets/css/dashboard.min.css'
import './globals.css'
// import { languages } from './globals'; 
import ToastContainerWrapper from './components/Common/ToastContainerWrapper'
import enTranslation from './Languages/en.json';
import deTranslation from './Languages/de.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      de: {
        translation: deTranslation,
      },
    },
    lng: 'en', // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }))
// }
export default function RootLayout({ 
  children,
  params: {
    lng
  }
 }) {
  return (
    <html lang={lng}>
      <body>
        <Header></Header>
        
        <main>
               {children}
      {/* <Navbar/> */}
        </main>
       
        <Footer></Footer>
        <ToastContainerWrapper />
        

      </body>
    </html>
    
  )
}
