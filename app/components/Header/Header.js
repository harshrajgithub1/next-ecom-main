import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <header id="header" className="tra-menu navbar-light white-scroll">
      <div className="header-wrapper">
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/assets/img/logo.svg" alt="mobile-logo" />
          </span>
          <a id="wsnavtoggle" className="wsanimated-arrow">
            <span></span>
          </a>
        </div>
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp">
            <div className="desktoplogo">
              <Link href="/" className="logo-black">
                <img
                  className="light-theme-img"
                  src="/assets/img/logo.svg"
                  alt="logo"
                />
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
                  <Link href="/" className="h-link active">
                    Start
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link href="comparison" className="h-link ">
                    Vergleich
                  </Link>
                </li>
                {/* <li><a href="services.php" class="h-link">Produkte <span class="wsarrow"></span></a>
                  <ul class="sub-menu">
                      <li><a href="service-detail.php">Planners</a></li>
                      <li><a href="service-detail.php">Managers</a></li>
                      <li><a href="service-detail.php">Suppliers</a></li>
                      <li><a href="service-detail.php">Comparison</a></li>
                      <li><a href="service-detail.php">Suppliers</a></li>
                  </ul>
              </li> */}
                <li className="nl-simple">
                  <Link href="/about" className="h-link ">
                    Über uns
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link href="contact" className="h-link ">
                    Kontakt
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link
                    href="login"
                    className="btn r-04 btn--theme hover--tra-white last-link">
                    Anmeldung
                  </Link>
                </li>
                <li className="language">
                  <select name="lang" id="lang" className="form-control">
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
