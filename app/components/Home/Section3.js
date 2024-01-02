

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
    <>
      
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
               className="img-fluid w-100"
        />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txt-block right-column wow fadeInLeft">
                <div className="section-title text-start">
                
                </div>
                <div dangerouslySetInnerHTML={{ __html: middleData?.home_section1_description }}>
							</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="lik-2" className="pt-100 ct-04 content-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
          <div className='col-md-6 order-last order-md-2' dangerouslySetInnerHTML={{ __html: middleData?.home_section2_description }}></div>
          
            <div className="col-md-6 order-first order-md-2">
              <div className="img-block wow fadeInLeft">
              <img 
              src={`${apiUrl}storage/home_sections/${middleData?.home_section2_image}`}
               alt="header image"
               className="img-fluid w-100"
        />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default section3
