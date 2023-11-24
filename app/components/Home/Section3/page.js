"use client"
import React from 'react'
import { useState, useEffect } from "react";

const page = () => {

//   const [headerData, setHeaderData] = useState();


//   function getHeaderInfo(){
//       fetch('http://45.79.185.26/trifusa/public/api/home/header/image', {
//           method: 'POST',
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/x-www-form-urlencoded'
//           },
//       // body: formBody
//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//           //console.log(responseJson);
//           if (responseJson.success == "true") {
//               setHeaderData(responseJson.header_image[0]);
//               //console.log(headerData.home_page_image)
//           }
//       })
//       .catch((error) => {
//           console.error(error);
//       });
//   }
//   useEffect(() => {
//       getHeaderInfo();

//   }, [])

// console.log(headerData);

  return (
    <div>
      
      <section
        id="lnk-1"
        className="py-100 ct-02 content-section division bg--02"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="img-block left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/assets/img/img-10.png"
                  alt="content-image"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txt-block right-column wow fadeInLeft">
                <span className="section-id">Lorem, ipsum dolor</span>
                <div className="section-title text-start">
                  <h2 className="s-50">
                    Lösungen <span>für ein</span> optimiertes finden
                  </h2>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                  culpa alias nulla incidunt animi ullam optio quasi quos
                  delectus hic! Quidem illo eligendi facilis ex repellat vero
                  consequuntur nulla mollitia.
                </p>
                <h5 className="s-24">Lorem ipsum dolor sit amet</h5>
                <ul className="simple-list">
                  <li className="list-item">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit ducimus modi voluptatum repellendus
                      perferendis temporibus.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="mb-0">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eius nam eaque mollitia. Exercitationem, veritatis minima.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="lik-2" className="pt-100 ct-04 content-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-last order-md-2">
              <div className="txt-block left-column wow fadeInRight">
                <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">1</div>
                    <span className="cbox-2-line"></span>
                  </div>
                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">
                      Umfassende Vergleichsmöglichkeiten
                    </h5>
                    <p>
                      Trisfusa bietet eine breite Palette von Smarthome-Geräten
                      und Automationstechnologien zur Auswahl. Mit unserer
                      Plattform kannst du Produkte und Lösungen in verschiedenen
                      Kategorien vergleichen, um diejenigen zu finden, die am
                      besten zu deinen Bedürfnissen passen.
                    </p>
                  </div>
                </div>
                <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">2</div>
                    <span className="cbox-2-line"></span>
                  </div>
                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">
                      Kompatibilitäts- und Schnittstellenüberprüfung
                    </h5>
                    <p>
                      {" "}
                      Wir legen besonderen Wert auf die Gewährleistung der
                      Kompatibilität und Schnittstellenzugehörigkeit deiner
                      Geräte. Trisfusa hilft dir, sicherzustellen, dass alle
                      deine Smarthome-Geräte nahtlos miteinander interagieren
                      und reibungslos funktionieren.
                    </p>
                  </div>
                </div>
                <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">3</div>
                  </div>
                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">
                      Expertenberatung und Benutzerfreundlichkeit
                    </h5>
                    <p className="mb-0">
                      Unser Team von Smarthome-Experten steht dir zur Seite und
                      bietet persönliche Beratung, um sicherzustellen, dass du
                      fundierte Entscheidungen treffen kannst. Gleichzeitig
                      haben wir unsere Plattform benutzerfreundlich gestaltet,
                      damit du leicht navigieren und die besten Entscheidungen
                      für dein Smarthome treffen kannst.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-first order-md-2">
              <div className="img-block wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="/assets/img/tablet-01.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default page
