import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/flaticon.css'
import '../public/assets/css/jkiticon.css'
import '../public/assets/css/menu.css'
import '../public/assets/css/dropdown-effects/fade-down.css'
import '../public/assets/css/magnific-popup.css'
// import '../public/assets/css/owl.carousel.min.css'
// import '../public/assets/css/owl.theme.default.min.css'
import '../public/assets/css/lunar.css'
import '../public/assets/css/animate.css'
import '../public/assets/css/style.min.css'
import '../public/assets/css/responsive.css'
import './globals.css'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
    
  )
}
