
'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { apiUrl } from '@/app/constant/constant';
import { useTranslation } from 'react-i18next';

const TermsAndConditions = () => {
  const { t } = useTranslation();

  const [termsData, setTermsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}api/footer/cutromerservices`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page_name: 'terms&conditions',
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        if (data.success === 'true') {
          setTermsData(data.footer_section);
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
        style={{
          backgroundImage: `url(${apiUrl}storage/otherpagesection/${termsData?.page_img})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>{termsData?.title}</h3>
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">{t('Start')}</Link>
                  </li>
                  <li>{termsData?.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="terms-page" className="gr--whitesmoke inner-page-hero division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
            
            <div className="inner-page-title text-left">
                     <h5 className="s-52"  dangerouslySetInnerHTML={{ __html: termsData?.page_description }}>

                     </h5>
                 </div>
      
               </div>
            </div>
          </div>
        
      </section>
    </div>
  );
};

export default TermsAndConditions;
