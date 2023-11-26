"use client"
import React from 'react'
import Link from 'next/link'; 
import { useState, useEffect } from "react";

const page = () => {

  const [headerData, setHeaderData] = useState();
  let api_footer = 'http://45.79.185.26/trifusa/public/api/home/footer/image';

  function getHeaderInfo(){
      fetch(api_footer, {
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
       <section id="banner-3" className="pt-100 banner-section" 
       style={{ backgroundImage: "url: `http://45.79.185.26/trifusa/public/storage/home_images/${headerData?.home_page_image}`)"}}>
      
        <div className="container">
          <div className="banner-3-wrapper bg--03 bg--scroll r-16">
          {/* <img
              src={`http://45.79.185.26/trifusa/public/storage/home_images/${headerData?.home_page_image}`}
               alt=""
               className="img-fluid banner-img"
        /> */}
            <div className="banner-overlay">
              <div className="row">
                <div className="col">
                  <div className="banner-3-txt color--white">
                   
                    <h2 className="s-48"> 
                        {headerData?.img_header_1} </h2>
                    <p className="p-xl">
                       {headerData?.img_para_1} 
                    </p>
                    <Link
                      href="#"
                      className="btn r-04 btn--theme hover--tra-white"
                    >
                     {headerData?.img_h_text} 
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