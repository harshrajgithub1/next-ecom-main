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
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		speed: 2000,
      	autoplaySpeed: 2000,
      	cssEase: "linear"
	  };

	  const htmlContent = '<p>This is <strong>HTML</strong> content.</p>';

	  const [testimonialData, settestimonialData] = useState();

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
            console.log(responseJson);
            if (responseJson.success == "true") {
                settestimonialData(responseJson.client_testimonial[0]);
               
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }
    useEffect(() => {
        gettestimonialInfo();

    }, [])



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
              <div className="reviews-1-wrapper">
                <div className="review-1 bg--white-100 block-shadow r-08">
				<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
						
							{/* <p>{testimonialData?.client_quote}
							</p> */}

							<p dangerouslySetInnerHTML={{ __html: testimonialData?.client_quote}} >
							{testimonialData?.client_quote}
							</p>
							
							<div className="author-data clearfix">
							
								<div className="review-avatar">
						
									<img src=
									 {`${apiUrl}storage/client_says/1700139593_99357.jpg`}
									
								 alt="review-avatar" />
					
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700"> {testimonialData?.client_name}</h6>
									<p className="p-sm">{testimonialData?.client_designation}</p>
									
								</div>
							</div>
						</div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-2.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Joel Peterson</h6>
									<p className="p-sm">Internet Surfer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-3.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Marisol19</h6>
									<p className="p-sm">@marisol19</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-4.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Leslie D.</h6>
									<p className="p-sm">Web Developer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-5.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Jennifer Harper</h6>
									<p className="p-sm">App Developer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-6.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Jonathan Barnes</h6>
									<p className="p-sm">jQuery Programmer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-7.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Mike Harris</h6>
									<p className="p-sm">Graphic Designer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="assets/img/review-author-8.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Evelyn Martinez</h6>
									<p className="p-sm">WordPress Consultant</p>
								</div>
							</div>
						</div>
					</div>

              {/* Repeat for other slides */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
           
{/* <section id="reviews-1" className="pt-100 shape--06 shape--gr-whitesmoke reviews-section vivek">
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
			 
			    <div className="reviews-1-wrapper">
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
						
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							
							<div className="author-data clearfix">
							
								<div className="review-avatar">
						
									<img src="/assets/img/review-author-1.jpg" alt="review-avatar" />
					
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Scott Boxer</h6>
									<p className="p-sm">@scott_boxer</p>
									
								</div>
							</div>
						</div>
					</div>
					
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-2.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Joel Peterson</h6>
									<p className="p-sm">Internet Surfer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-3.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Marisol19</h6>
									<p className="p-sm">@marisol19</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-4.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Leslie D.</h6>
									<p className="p-sm">Web Developer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-5.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Jennifer Harper</h6>
									<p className="p-sm">App Developer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-6.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Jonathan Barnes</h6>
									<p className="p-sm">jQuery Programmer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-7.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Mike Harris</h6>
									<p className="p-sm">Graphic Designer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="review-1 bg--white-100 block-shadow r-08">
						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
						<div className="review-txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
								numquam adipisci necessitatibus nam quas?
							</p>
							<div className="author-data clearfix">
								<div className="review-avatar">
									<img src="assets/img/review-author-8.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Evelyn Martinez</h6>
									<p className="p-sm">WordPress Consultant</p>
								</div>
							</div>
						</div>
					</div>
                </div>   
      
				
			 </div>
		   </div>
		
	</div>
</section>
   
  )
} */}

export default section5
