'use client'
import Link from 'next/link';
import { useState, useEffect } from "react";
import { apiUrl } from '@/app/constant/constant';


const Footer = () => {
  const [footerData, setFooterData] = useState();


  function getFooterInfo(){
      fetch( `${apiUrl}api/footer/section`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          },
      // body: formBody
      })
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.success == "true") {
            setFooterData(responseJson.footer_section[0]);
              //console.log(headerData.home_page_image)
          }
      })
      .catch((error) => {
          console.error(error);
      });
  }
  useEffect(() => {
      getFooterInfo();

  }, [])



  return (
    <footer id="footer-3" className="pt-100 footer ft-3-ntr">
      <div className="bottom-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="footer-info">
                <Link href="/">     
                  <img className="footer-logo" 
                  src=
                  {`${apiUrl}storage/footer_images/${footerData?.footer_logo}`}
                  alt="footer-logo" />
                </Link>
                <p>{footerData?.footer_desc}</p>
                <h2 className="heading-title">Hotline : <span className="style-color"><span>{footerData?.footer_phone}</span></span></h2>
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
                        <Link href="tel:+41449380715">{footerData?.footer_phone}</Link>
                      </div>
                    </div>

                    <div className="box">
                      <i className="jki jki-email-light"></i>
                      <div className="box-dtl">
                        <h4>Email</h4>
                        <Link href="mailto:info@smarthomeconsulting.ch">{footerData?.footer_email}</Link>
                      </div>
                    </div>

                    <div className="box">
                      <i className="jki jki-placeholder2-light"></i>
                      <div className="box-dtl">
                        <h4>Standort</h4>
                        <Link href="#">{footerData?.footer_location}</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="footer-links fl-1">
                    <h6 className="s-17">{footerData?.footer_h1}</h6>
                    <ul className="foo-links clearfix">
                      <li>
                        <p><Link href="about">Über uns</Link></p>
                      </li>
                      <li>
                        <p><Link href="product">Product</Link></p>
                      </li>
                      <li>
                        <p><Link href="service">Service</Link></p>
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
                    <h6 className="s-17">{footerData?.footer_h2}</h6>
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
                    <h6 className="s-17 w-700">{footerData?.footer_h3}</h6>
                    <p>{footerData?.footer_h3_desc}</p>
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
                  <li><Link href="/data-protection">data protection</Link></li>
                  <li><Link href="/legal-notice">legal notice</Link></li>
                  <li><Link href="/impressum">impressum</Link></li>
                  <li><Link href="/dsgvo">DSGVO</Link></li>
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
                <li><Link href="https://www.facebook.com/"><span className="flaticon-facebook"></span></Link></li>
                <li><Link href="https://twitter.com/"><span className="flaticon-twitter"></span></Link></li>
                <li><Link href="https://www.instagram.com/"><span className="flaticon-instagram"></span></Link></li>
                <li><Link href="https://www.youtube.com/"><span className="flaticon-youtube"></span></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
