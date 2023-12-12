"use client"

import Link from 'next/link'
import React from 'react'
import { apiUrl } from '@/app/constant/constant';
import { useState, useEffect } from "react";



const Cookies = () => {

  const [cookiesData, setCookiesData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}api/footer/cutromerservices`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page_name: 'cookie&policy',
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success === 'true') {
          setCookiesData(data.footer_section);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
        <section className="banner" 
       

      style={{
          backgroundImage: `url(${apiUrl}storage/otherpagesection/${cookiesData?.page_img})`,
        }}
        >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-caption">
              <h3>{cookiesData?.title}</h3>
              <ul className="breadcrumb">
                <li><Link href="/">Start</Link></li>
                <li>{cookiesData?.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="cookies-page" className="gr--whitesmoke pb-80 inner-page-hero division">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="inner-page-title">
              <h2 className="s-52">Cookie-Richtlinie <span>für Trisfusa</span></h2>
              <p className="p-lg">{cookiesData?.page_heading}</p> </div>
            <div className="txt-block legal-info">
              <h4 className="s-30 w-700" dangerouslySetInnerHTML={{ __html: cookiesData?.page_description }}>


              </h4>

            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Cookies
