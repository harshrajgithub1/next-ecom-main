import React from "react";

const Impressum = () => {
  return (
    <div>
      <section
        class="banner"
        style="background-image:url(assets/img/banner6.jpg)"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="banner-caption">
                <h3>Impressum</h3>
                <ul class="breadcrumb">
                  <li>
                    <a href="index.php">Start</a>
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
        class="gr--whitesmoke pb-80 inner-page-hero division"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="inner-page-title">
                <h2 class="s-52">
                  Impressum <span>für Trisfusa</span>
                </h2>
                <p class="p-lg">Verantwortlich für den Inhalt:</p>
              </div>
              <div class="txt-block legal-info">
                <h5 class="s-24 w-700">
                  Arthur Peter Lorenzen Smarthomeconsulting Bachtelstrasse 68
                  8342 Wernetshausen Schweiz
                </h5>

                <ul class="simple-list">
                  <li class="list-item">
                    <p>
                      <strong>Telefon:</strong> 0789600300 / 044 938 07 15
                    </p>
                  </li>
                  <li class="list-item">
                    <p>
                      <strong>E-Mail:</strong> info@smarthomeconsulting.ch
                    </p>
                  </li>
                  <li class="list-item">
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
