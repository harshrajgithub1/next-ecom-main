"use client"


import Link from 'next/link'
import { apiUrl } from '@/app/constant/constant';
import React,{ useState, useEffect } from "react";


const PrivacyPolicy = () => {

   const [privacyData, setPrivacyData] = useState(null);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}api/footer/cutromerservices`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page_name: 'privacy&policy',
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success === 'true') {
          setPrivacyData(data.footer_section);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      <section
        className="banner"
         //style="background-image:url(assets/img/banner1.jpg)"

         style={{
          backgroundImage: `url(${apiUrl}storage/otherpagesection/${privacyData?.page_img})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>{privacyData?.title}</h3>

                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>{privacyData?.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="privacy-page"
        className="gr--whitesmoke pb-80 inner-page-hero division"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="inner-page-title">
                <h2 className="s-52">
                {privacyData?.title}
                </h2>
                <p className="p-lg">
                {privacyData?.meta_title}
                </p>
              </div>
              <div className="txt-block legal-info">
                <h4 className="s-30 w-700" dangerouslySetInnerHTML={{ __html: privacyData?.page_description }}>
               
                </h4>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
