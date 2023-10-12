
import React from "react";

const Impressum = () => {
  return (
    <div>
      <section
        className="banner"
        // style="background-image:url(/assets/img/banner6.jpg)"

        style={{
        backgroundImage: `url(/assets/img/banner6.jpg)`,
        backgroundSize: 'cover', // You can adjust these styles as needed
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '540px', // Set the width and height as needed
      }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>Impressum</h3>
                <ul className="breadcrumb">
                  <li>
                    <a href="/">Start</a>
                  </li>
                  <li>Impressum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cookies-page"
        className="gr--whitesmoke pb-80 inner-page-hero division"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="inner-page-title">
                <h2 className="s-52">
                  Impressum <span>für Trisfusa</span>
                </h2>
                <p className="p-lg">Verantwortlich für den Inhalt:</p>
              </div>
              <div className="txt-block legal-info">
                <h5 className="s-24 w-700">
                  Arthur Peter Lorenzen Smarthomeconsulting Bachtelstrasse 68
                  8342 Wernetshausen Schweiz
                </h5>

                <ul className="simple-list">
                  <li className="list-item">
                    <p>
                      <strong>Telefon:</strong> 0789600300 / 044 938 07 15
                    </p>
                  </li>
                  <li className="list-item">
                    <p>
                      <strong>E-Mail:</strong> info@smarthomeconsulting.ch
                    </p>
                  </li>
                  <li className="list-item">
                    <p>
                      <strong>E-UID:</strong> CHE-324.168.761
                      Handelsregistereintrag: 22698
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
