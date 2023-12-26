"use client"
import React from 'react'
import { useState, useEffect } from "react";

import { apiUrl } from '@/app/constant/constant';

const section3 = () => {

  const [middleData, setMiddleData] = useState();
 
  function getMiddleInfo(){
      fetch( `${apiUrl}api/home/section`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          },
      // body: formBody
      })
      .then((response) => response.json())
      .then((responseJson) => {
          //console.log(responseJson);
          if (responseJson.success == "true") {
            setMiddleData(responseJson.home_section[0]);
              //console.log(headerData.home_page_image)
          }
      })
      .catch((error) => {
          console.error(error);
      });
  }
  useEffect(() => {
    getMiddleInfo();

  }, [])


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
              src={`${apiUrl}storage/home_sections/${middleData?.home_section1_image}`}
               alt="header image"
               className="img-fluid banner-img"
        />

              </div>
            </div>
            <div className="col-md-6">
              <div className="txt-block right-column wow fadeInLeft">
                <div className="section-title text-start">
                </div>
                <p dangerouslySetInnerHTML={{ __html: middleData?.home_section1_description }}>
							</p>
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
                      Harsh Vergleichsmöglichkeiten
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
              src={`${apiUrl}storage/home_sections/${middleData?.home_section1_image}`}
               alt="header image"
               className="img-fluid banner-img"
        />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default section3
