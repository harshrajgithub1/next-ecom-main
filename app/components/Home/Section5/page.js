"use client"

import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const page = () => {
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState("");
  
	const galleryTab = [
	  {
		imageUrl: "https://themewagon.github.io/snapshot/images/model-1.jpg",
		type: "Nature",
		title: "Beautiful Work",
	  },
	  {
		imageUrl: "https://themewagon.github.io/snapshot/images/model-2.jpg",
		type: "Nature",
		title: "Beautiful Work",
	  },
	  {
		imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg",
		type: "Nature",
		title: "Beautiful Work",
	  },
	  {
		imageUrl: "https://themewagon.github.io/snapshot/images/model-4.jpg",
		type: "Nature",
		title: "Beautiful Work",
	  },
	  {
		imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
		type: "Nature",
		title: "Beautiful Work",
	  },
	];
  
  
  
	const slides = galleryTab.map((item) => ({
	  src: item.imageUrl,
	  width: 3840,
	  height: 2560,
	  srcSet: [
		{ src: item.imageUrl, width: 320, height: 213 },
		{ src: item.imageUrl, width: 640, height: 426 },
		{ src: item.imageUrl, width: 1200, height: 800 },
		{ src: item.imageUrl, width: 2048, height: 1365 },
		{ src: item.imageUrl, width: 3840, height: 2560 },
	  ],
	}));
  
	return (
	  <div className="w-full">
		<div className=" ">
		  <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap mx-2 md:mx-0">
			{galleryTab.map((x, index) => {
			  return (
				<div key={index} className="md:h-[50vw] h-screen relative">
				  <div className="group h-full">
					<div
					  className="bg-cover bg-center h-full w-full bg-no-repeat"
					  style={{ backgroundImage: `url("${x.imageUrl}")` }}
					>
					  <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
						<div>{x.type}</div>
						<div>{x.title}</div>
					  </div>
					</div>
					<div
					  className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
					  onClick={() => {
						setOpen(true);
						setImage(x.imageUrl);
					  }}
					>
					  <p className="text-white">
						<AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
					  </p>
					</div>
				  </div>
				</div>
			  );
			})}
		  </div>
		</div>
		<Lightbox
		  open={open}
		  close={() => setOpen(false)}
		  plugins={[Zoom]}
		  showPrevNext={false}
		  slides={slides}
		/>
	  </div>
	);
  };
  
  export default page;

// const page = () => {


//   return (
    
           
// <section id="reviews-1" className="pt-100 shape--06 shape--gr-whitesmoke reviews-section">
// 	<div className="container">
// 		<div className="row justify-content-center">
// 			<div className="col-md-10 col-lg-9">
// 				<div className="section-title mb-70">
// 					<h2 className="s-50">Here’s what our <span>amazing clients</span> are saying</h2>
// 					<p className="s-21 color--grey">Lorem, ipsum dolor sit amet consectetur adipisicing</p>
// 				</div>
// 			</div>
// 		</div>

		
	
// 		  <div className="row">
// 			 <div className="col">
			 
// 			    <div className="reviews-1-wrapper">
// 					<div className="review-1 bg--white-100 block-shadow r-08">
// 						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
// 						<div className="review-txt">
						
// 							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
// 								numquam adipisci necessitatibus nam quas?
// 							</p>
							
// 							<div className="author-data clearfix">
							
// 								<div className="review-avatar">
						
// 									<img src="/assets/img/review-author-1.jpg" alt="review-avatar" />
					
// 								</div>
// 								<div className="review-author">
// 									<h6 className="s-18 w-700">Scott Boxer</h6>
// 									<p className="p-sm">@scott_boxer</p>
									
// 								</div>
// 							</div>
// 						</div>
// 					</div>
					
// 					<div className="review-1 bg--white-100 block-shadow r-08">
// 						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
// 						<div className="review-txt">
// 							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
// 								numquam adipisci necessitatibus nam quas?
// 							</p>
// 							<div className="author-data clearfix">
// 								<div className="review-avatar">
// 									<img src="/assets/img/review-author-2.jpg" alt="review-avatar" />
// 								</div>
// 								<div className="review-author">
// 									<h6 className="s-18 w-700">Joel Peterson</h6>
// 									<p className="p-sm">Internet Surfer</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="review-1 bg--white-100 block-shadow r-08">
// 						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
// 						<div className="review-txt">
// 							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
// 								numquam adipisci necessitatibus nam quas?
// 							</p>
// 							<div className="author-data clearfix">
// 								<div className="review-avatar">
// 									<img src="/assets/img/review-author-3.jpg" alt="review-avatar" />
// 								</div>
// 								<div className="review-author">
// 									<h6 className="s-18 w-700">Marisol19</h6>
// 									<p className="p-sm">@marisol19</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="review-1 bg--white-100 block-shadow r-08">
// 						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
// 						<div className="review-txt">
// 							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
// 								numquam adipisci necessitatibus nam quas?
// 							</p>
// 							<div className="author-data clearfix">
// 								<div className="review-avatar">
// 									<img src="/assets/img/review-author-4.jpg" alt="review-avatar" />
// 								</div>
// 								<div className="review-author">
// 									<h6 className="s-18 w-700">Leslie D.</h6>
// 									<p className="p-sm">Web Developer</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="review-1 bg--white-100 block-shadow r-08">
// 						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
// 						<div className="review-txt">
// 							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
// 								numquam adipisci necessitatibus nam quas?
// 							</p>
// 							<div className="author-data clearfix">
// 								<div className="review-avatar">
// 									<img src="/assets/img/review-author-5.jpg" alt="review-avatar" />
// 								</div>
// 								<div className="review-author">
// 									<h6 className="s-18 w-700">Jennifer Harper</h6>
// 									<p className="p-sm">App Developer</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="review-1 bg--white-100 block-shadow r-08">
// 						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
// 						<div className="review-txt">
// 							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
// 								numquam adipisci necessitatibus nam quas?
// 							</p>
// 							<div className="author-data clearfix">
// 								<div className="review-avatar">
// 									<img src="/assets/img/review-author-6.jpg" alt="review-avatar" />
// 								</div>
// 								<div className="review-author">
// 									<h6 className="s-18 w-700">Jonathan Barnes</h6>
// 									<p className="p-sm">jQuery Programmer</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="review-1 bg--white-100 block-shadow r-08">
// 						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
// 						<div className="review-txt">
// 							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
// 								numquam adipisci necessitatibus nam quas?
// 							</p>
// 							<div className="author-data clearfix">
// 								<div className="review-avatar">
// 									<img src="/assets/img/review-author-7.jpg" alt="review-avatar" />
// 								</div>
// 								<div className="review-author">
// 									<h6 className="s-18 w-700">Mike Harris</h6>
// 									<p className="p-sm">Graphic Designer</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="review-1 bg--white-100 block-shadow r-08">
// 						<div className="review-ico ico-65"><span className="flaticon-quote"></span></div>
// 						<div className="review-txt">
// 							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt, reiciendis
// 								numquam adipisci necessitatibus nam quas?
// 							</p>
// 							<div className="author-data clearfix">
// 								<div className="review-avatar">
// 									<img src="assets/img/review-author-8.jpg" alt="review-avatar" />
// 								</div>
// 								<div className="review-author">
// 									<h6 className="s-18 w-700">Evelyn Martinez</h6>
// 									<p className="p-sm">WordPress Consultant</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
//                 </div>   
      
				
// 			 </div>
// 		   </div>
		
// 	</div>
// </section>
   
//   )
// }

// export default page
