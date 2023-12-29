// 'use client'
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../AuthProvider/useAuth';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation'
// import { useTranslation } from 'react-i18next';

// const Header = () => {
//   const [currentLanguage, setCurrentLanguage] = useState("en");
//   const { i18n } = useTranslation();
//   const changeLanguage = (lang) => {
//     console.log(lang.target.value);
//     i18n.changeLanguage(lang.target.value);
//     setCurrentLanguage(lang.target.value);
//     localStorage.setItem("language", lang.target.value);
//     // i18n.changeLanguage(lang.target.value);
//     // setCurrentLanguage(lang.target.value);
//   };

//   const pathname = usePathname();
//   //console.log(pathname);
//   const { isLoggedIn, logout } = useAuth();
//   const [isScrolled, setIsScrolled] = useState(false);
//   //console.log(isLoggedIn);
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       if (scrollPosition > 80) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//       // if (window.innerWidth > 768) {
//       //   new WOW().init();
//       // }
    
    
//       /*----------------------------------------------------*/
//       /*	Mobile Menu Toggle
//       /*----------------------------------------------------*/
    
//       if ($(window).outerWidth() < 992) {
//         $('.wsmenu-list li.nl-simple, .wsmegamenu li, .sub-menu li').on('click', function () {
//           $('body').removeClass("wsactive");
//           $('.sub-menu').slideUp('slow');
//           $('.wsmegamenu').slideUp('slow');
//           $('.wsmenu-click').removeClass("ws-activearrow");
//           $('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
//         });
//       }
    
//       if ($(window).outerWidth() < 992) {
//         $('.wsanimated-arrow').on('click', function () {
//           $('.sub-menu').slideUp('slow');
//           $('.wsmegamenu').slideUp('slow');
//           $('.wsmenu-click').removeClass("ws-activearrow");
//           $('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
//         });
//       }
//     };

//     // Attach the event listener
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); 
//   const handleLogout = () =>{
//     logout();
//   }

//   useEffect(() => {
//     const lng = localStorage.getItem("language");
//     if (!!lng) {
//       i18n.changeLanguage(lng);
//       setCurrentLanguage(lng);
//     }
//   }, [i18n]);


//   return (
//     <header id="header" className="tra-menu navbar-light white-scroll">
//       <div className="header-wrapper">
//         <div className="wsmobileheader clearfix">
//           <span className="smllogo">
//             <img src="/assets/img/logo.svg" alt="mobile-logo" />
//           </span>
//           <a id="wsnavtoggle" className="wsanimated-arrow">
//             <span></span>
//           </a>
//         </div>
//         <div className={`hidden sm:block text-black wsmainfull menu clearfix ${isScrolled ? 'scroll' : ''}`}>
//           <div className="wsmainwp">
//             <div className="desktoplogo">
//               <Link href="/" className="logo-black">
//                 <img
//                   className="light-theme-img"
//                   src="/assets/img/logo.svg"
//                   alt="logo"
//                 />
//               </Link>
//             </div>
//             <div className="desktoplogo">
//               <Link href="/" className="logo-white">
//                 <img src="/assets/img/logo-white.svg" alt="logo" />
//               </Link>
//             </div>
//             <nav className="wsmenu clearfix">
//               <ul className="wsmenu-list nav-theme">
//                 <li className="nl-simple">
//                   <Link href="/" className={`h-link ${pathname === '/' ? 'active' : ''}`}>
//                   Start
//                   </Link>
//                 </li>
//                 <li className="nl-simple">
//                   <Link href="product" className={`h-link ${pathname === '/product' ? 'active' : ''}`}>
//                     Product
//                   </Link>
//                 </li>
//                 {/* <li><a href="services.php" class="h-link">Produkte <span class="wsarrow"></span></a>
//                   <ul class="sub-menu">
//                       <li><a href="service-detail.php">Planners</a></li>
//                       <li><a href="service-detail.php">Managers</a></li>
//                       <li><a href="service-detail.php">Suppliers</a></li>
//                       <li><a href="service-detail.php">Comparison</a></li>
//                       <li><a href="service-detail.php">Suppliers</a></li>
//                   </ul>
//               </li> */}
//                 <li className="nl-simple">
//                   <Link href="/about" className={`h-link ${pathname === '/about' ? 'active' : ''}`}>
//                     Über uns
//                   </Link>
//                 </li>
//                 <li className="nl-simple">
//                   <Link href="/contact" className={`h-link ${pathname === '/contact' ? 'active' : ''}`}>
//                     Kontakt
//                   </Link>
//                 </li>
//                 <li className="nl-simple">
//                 {!isLoggedIn ?
//                 <Link
//                 href="/login"
//                 className="btn r-04 btn--theme hover--tra-white last-link">
//                 Anmeldung
//               </Link> : 
//               <button
//               onClick={handleLogout}
//               className="btn r-04 btn--theme hover--tra-white last-link">
//               Log out
//             </button>
//                 }
//                 </li>
                
//                 <li >
                  
//                 </li>
//                 <li className="language">
                
//                   <select name="lang" id="lang" className="form-control" onChange={changeLanguage} value={currentLanguage}>
//                     <option value="en">EN</option>
//                     <option value="de">DE</option>
//                     <option value="it">IT</option>
//                     <option value="fr">FR</option>
//                   </select>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;







'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider/useAuth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import $ from 'jquery'; // Import jQuery


const Header = () => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    console.log(lang.target.value);
    i18n.changeLanguage(lang.target.value);
    setCurrentLanguage(lang.target.value);
    localStorage.setItem('language', lang.target.value);
  };

  const pathname = usePathname();
  const { isLoggedIn, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if ($(window).outerWidth() < 992) {
        $('.wsmenu-list li.nl-simple, .wsmegamenu li, .sub-menu li').on('click', function () {
          $('body').removeClass('wsactive');
          $('.sub-menu').slideUp('slow');
          $('.wsmegamenu').slideUp('slow');
          $('.wsmenu-click').removeClass('ws-activearrow');
          $('.wsmenu-click02 > i').removeClass('wsmenu-rotate');
        });
      }

      if ($(window).outerWidth() < 992) {
        $('.wsanimated-arrow').on('click', function () {
          $('.sub-menu').slideUp('slow');
          $('.wsmegamenu').slideUp('slow');
          $('.wsmenu-click').removeClass('ws-activearrow');
          $('.wsmenu-click02 > i').removeClass('wsmenu-rotate');
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const lng = localStorage.getItem('language');
    if (!!lng) {
      i18n.changeLanguage(lng);
      setCurrentLanguage(lng);
    }
  }, [i18n]);

  return (
    <header id="header" className={`tra-menu navbar-light white-scroll ${isScrolled ? 'scroll' : ''}`}>
      <div className="header-wrapper">
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/assets/img/logo.svg" alt="mobile-logo" />
          </span>
          <a id="wsnavtoggle" className="wsanimated-arrow">
            <span></span>
          </a>
        </div>
        <div className="hidden sm:block text-black wsmainfull menu clearfix">
          <div className="wsmainwp">
            <div className="desktoplogo">
              <Link href="/" className="logo-black">
                <img className="light-theme-img" src="/assets/img/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="/" className="logo-white">
                <img src="/assets/img/logo-white.svg" alt="logo" />
              </Link>
            </div>
            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list nav-theme">
                <li className="nl-simple">
                  <Link href="/" className={`h-link ${pathname === '/' ? 'active' : ''}`}>
                  {t('Start')}
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link href="product" className={`h-link ${pathname === '/product' ? 'active' : ''}`}>
                  {t('Product')}
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link href="/about" className={`h-link ${pathname === '/about' ? 'active' : ''}`}>
                  {t('About Us')}
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link href="/contact" className={`h-link ${pathname === '/contact' ? 'active' : ''}`}>
                  {t('Contact')}
                  </Link>
                </li>
                <li className="nl-simple">
                  {!isLoggedIn ? (
                    <Link href="/login" className="btn r-04 btn--theme hover--tra-white last-link">
                    {t('Registration')}
                    </Link>
                  ) : (
                    <button onClick={handleLogout} className="btn r-04 btn--theme hover--tra-white last-link">
                      Log out
                    </button>
                  )}
                </li>
                <li></li>
                <li className="language">
                  <select name="lang" id="lang" className="form-control" onChange={changeLanguage} value={currentLanguage}>
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                    <option value="it">IT</option>
                    <option value="fr">FR</option>
                  </select>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
