"use client"

import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { apiUrl } from '@/app/constant/constant';


const section5 = () => {
	const settings = {      //object created
		dots: true,
		infinite: true,
		speed: 100,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		speed: 10000,
      	autoplaySpeed: 10000,
      	cssEase: "linear"
	  };

	  
   //const [htmlContent, setHtmlContent] = useState('<p>This is some <strong>HTML</strong> content.</p>');

	  const [testimonialData, settestimonialData] = useState([]);
	  

    function gettestimonialInfo(){
        fetch( `${apiUrl}api/home/client/testimonial`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        // body: formBody
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.success === "true") {
                settestimonialData(responseJson.client_testimonial);
            }
        })
          .catch((error) => {
            console.error(error);
         });
    }
    useEffect(() => {
        gettestimonialInfo();

    }, []);

	useEffect(() => {
		console.log("After:", testimonialData);
	  }, [testimonialData]);



  return (
    <section id="reviews-1" className="pt-100 shape--06 shape--gr-whitesmoke reviews-section vivek">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-title mb-70">
              <h2 className="s-50">Here’s what our <span>amazing clients</span> are saying</h2>
              <p className="s-21 color--grey">Lorem, ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Slider {...settings}>
              {/* Slide 1 */}
              
			  

              {/* Slide 2 */}
			  {testimonialData &&
              testimonialData.map((category, index) => (
					<div key={index} className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p dangerouslySetInnerHTML={{ __html: category.client_quote }}>
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src={`${apiUrl}storage/client_says/${category?.client_image}`} alt="" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">{category.client_name}</h6>
									<p className="p-sm">{category.client_designation}</p>
								</div>
							</div>
						</div>
					 </div> 
          ))}

              {/* Repeat for other slides */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
           

export default section5
