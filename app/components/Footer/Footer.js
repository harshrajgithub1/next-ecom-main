import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer-3" className="pt-100 footer ft-3-ntr">
      <div className="bottom-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="footer-info">
                <a href="index.php">
                  <img className="footer-logo" src="/assets/img/logo-dark.svg" alt="footer-logo" />
                </a>
                <p>Trisfusa ist die führende Plattform für die Bewertung und Vergleichbarkeit von Smarthome-Systemen weltweit. Unsere Mission ist es, Endnutzern, Architekten und Bauherren dabei zu helfen, die besten Lösungen für ihr perfekte Smarthomeumgebung zu finden</p>
                <h2 className="heading-title">Hotline : <span className="style-color"><span>+41 44938 07 15</span></span></h2>
              </div>
            </div>

            <div className="col-xl-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-contact">
                    <div className="box">
                      <i className="jki jki-phone-handset-light"></i>
                      <div className="box-dtl">
                        <h4>Telefon</h4>
                        <a href="tel:+41449380715">+41 44938 07 15</a>
                      </div>
                    </div>

                    <div className="box">
                      <i className="jki jki-email-light"></i>
                      <div className="box-dtl">
                        <h4>Email</h4>
                        <a href="mailto:info@smarthomeconsulting.ch">info@smarthomeconsulting.ch</a>
                      </div>
                    </div>

                    <div className="box">
                      <i className="jki jki-placeholder2-light"></i>
                      <div className="box-dtl">
                        <h4>Standort</h4>
                        <a href="#">Bachtelstrasse 68 CH-8342 Wernetshausen</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="footer-links fl-1">
                    <h6 className="s-17">Quicklinks</h6>
                    <ul className="foo-links clearfix">
                      <li>
                        <p><Link href="about">Über uns</Link></p>
                      </li>
                      <li>
                        <p><Link href="comparison">Vergleich</Link></p>
                      </li>
                      <li>
                        <p><Link href="services">Produkte</Link></p>
                      </li>
                      <li>
                        <p><Link href="suppliers">Lieferanten</Link></p>
                      </li>
                      <li>
                        <p><Link href="handyman">Handwerker</Link></p>
                      </li>
                      <li>
                        <p><Link href="transcript">Zeugnis</Link></p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-links fl-2">
                    <h6 className="s-17">Kundendienst</h6>
                    <ul className="foo-links clearfix">
                      <li>
                        <p><Link href="terms-condition">Nutzungsbedingungen</Link></p>
                      </li>
                      <li>
                        <p><Link href="cookie">Cookie-Richtlinie</Link></p>
                      </li>
                      <li>
                        <p><Link href="privacy-policy">Datenschutz und Richtlinien</Link></p>
                      </li>
                      <li>
                        <p><Link href="help-center">Hilfezentrum</Link></p>
                      </li>
                      <li>
                        <p><Link href="faqs">FAQ's</Link></p>
                      </li>
                      <li>
                        <p><Link href="contact">Kontaktiere uns</Link></p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-links fl-3">
                    <h6 className="s-17 w-700">Abonniere den Newsletter</h6>
                    <p>Jetzt abonnieren und nichts mehr verpassen. Befördere dich in das Jahr 2050 mit Trisfusa und holde dir die neusten Updates</p>
                    <form className="newsletter-form">
                      <div className="input-group r-06">
                        <input type="email" className="form-control" placeholder="E-Mail-Adresse" required="" id="s-email" />
                        <span className="input-group-btn ico-15">
                          <button type="submit" className="btn color--theme">
                            <span className="flaticon-right-arrow-1"></span>
                          </button>
                        </span>
                      </div>
                      <label htmlFor="s-email" className="form-notification"></label>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="inline-menu">
                <ul>
                  <li><Link href="data-protection">data protection</Link></li>
                  <li><Link href="legal-notice">legal notice</Link></li>
                  <li><Link href="impressum">Impressum</Link></li>
                  <li><Link href="dsgvo">DSGVO</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="col">
              <div className="footer-copyright">
                <p className="p-sm">&copy; 2023 Trisfusa. <span>All Rights Reserved</span></p>
              </div>
            </div>
            <div className="col">
              <ul className="bottom-footer-socials ico-20 text-end">
                <li><a href="#"><span className="flaticon-facebook"></span></a></li>
                <li><a href="#"><span className="flaticon-twitter"></span></a></li>
                <li><a href="#"><span className="flaticon-instagram"></span></a></li>
                <li><a href="#"><span className="flaticon-youtube"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
