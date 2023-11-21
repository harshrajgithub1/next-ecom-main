"use client"
import React from 'react'
import Link from 'next/link'; 
import { useState, useEffect } from "react";

const page = () => {

  const [headerData, setHeaderData] = useState();


  function getHeaderInfo(){
      fetch('http://45.79.185.26/trifusa/public/api/home/footer/image', {
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
              setHeaderData(responseJson.header_image[0]);
              //console.log(headerData.home_page_image)
          }
      })
      .catch((error) => {
          console.error(error);
      });
  }
  useEffect(() => {
      getHeaderInfo();

  }, [])

//console.log(headerData?.img_para_1);

  return (
    <div>
       <section id="banner-3" className="pt-100 banner-section">
        <div className="container">
          <div className="banner-3-wrapper bg--03 bg--scroll r-16">
            <div className="banner-overlay">
              <div className="row">
                <div className="col">
                  <div className="banner-3-txt color--white">
                   
                    <h2 className="s-48">Produkte senden</h2>
                    <p className="p-xl">
                      Endecke Trisfusa und helfe dabei noch mehr Vergleiche zu
                      machen, sende uns deine Produkte die wir nicht kennen
                    </p>
                    <Link
                      href="#"
                      className="btn r-04 btn--theme hover--tra-white"
                    >
                      Jetzt Produkte senden
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
