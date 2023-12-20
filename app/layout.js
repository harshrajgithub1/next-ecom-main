'use client';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import '../public/assets/css/flaticon.css'
import '../public/assets/css/jkiticon.css'
import '../public/assets/css/menu.css'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/style.min.css'
import '../public/assets/css/responsive.css'
import '../public/assets/css/dashboard.min.css'
import './globals.css'
import ToastContainerWrapper from './components/Common/ToastContainerWrapper'

const languages = ['en', 'de']

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
