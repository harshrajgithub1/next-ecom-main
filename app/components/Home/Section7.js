"use client"
import React from 'react'
import Link from 'next/link'; 
import { useState, useEffect } from "react";
import { apiUrl } from '@/app/constant/constant';

const Section7 = () => {

  const [footerData, setFooterData] = useState();
 
  function getFooterInfo(){
      fetch(`${apiUrl}api/home/footer/image`, {
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
              setFooterData(responseJson.header_image[0]);
              //console.log(headerData.home_section7_image)
          }
      })
      .catch((error) => {
          console.error(error);
      });
  }
  useEffect(() => {
      getFooterInfo();
      //console.log(`url ({${apiUrl}api/home/footer/image/${footerData?.home_page_image})`)
  }, [])
//console.log(headerData?.img_para_1);

  return (
    <div>
       <section
        id="banner-3"
        className="pt-100 banner-section"
        
      >
      
        <div className="container">
          <div className="banner-3-wrapper bg--03 bg--scroll r-16"
          style={{
            backgroundImage: `url(${apiUrl}storage/home_images/${footerData?.home_page_image})`,
          }}>
          
            <div className="banner-overlay">
              <div className="row">
                <div className="col">
                  <div className="banner-3-txt color--white">
                   
                    <h2 className="s-48"> 
                        {footerData?.img_header_1} </h2>
                    <p className="p-xl">
                       {footerData?.img_para_1} 
                    </p>
                    <Link
                      href="#"
                      className="btn r-04 btn--theme hover--tra-white"
                    >
                     {footerData?.img_h_text} 
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

export default Section7
