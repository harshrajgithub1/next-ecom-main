// "use client"

// import React from 'react'
// import { useState, useEffect } from "react";

// const page = () => {

//   const [headerData, setHeaderData] = useState();


//   function getHeaderInfo(){
//       fetch('http://45.79.185.26/trifusa/public/api/category', {
//           method: 'POST',
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/x-www-form-urlencoded'
//           },
//       // body: formBody
//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//           console.log(responseJson);
//           if (responseJson.success == "true") {
//               setHeaderData(responseJson.header_image[0]);
//               //console.log(headerData.home_page_image)
//           }
//       })
//       .catch((error) => {
//           console.error(error);
//       });
//   }
//   useEffect(() => {
//       getHeaderInfo();

//   }, [])

// //console.log(headerData?.img_para_1);


//   return (
//     <div>
//        <section
//         id="features-6"
//         className="pt-100 pb-50 features-section division"
//       >
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-10 col-lg-9">
//               <div className="section-title mb-70">
//                 <h2 className="s-50">
//                   Wähle drei gratis <span>kategorien</span> für dein Vergleich
//                   aus
//                 </h2>
//                 <p className="s-21 color--grey">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="fbox-wrapper text-center">
//             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
//             {headerData &&
//               headerData.map((category, index) => (
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src={`/assets/img/icon/${category.icon}.png`}
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">{category.name}</h6>
//                   </div>
//                 </div>
//               </div>
//               ))}
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src={`http://45.79.185.26/trifusa/public/storage/home_images/${headerData?.cat_image}`}
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Storen & Rollladen</h6>
//                   </div>
//                 </div>
//               </div>
//               {/* <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/2.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Sicherheit</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/3.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Multimedia</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/4.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Heizung</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/5.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Klima</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/6.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Lüftung</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/7.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Roboter</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/8.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Photovoltaik</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/9.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Auto & Ladestation</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/10.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Tür und Tor</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/17.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Solar</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/12.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Medizin</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/13.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Notlicht</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/14.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Haushaltshelfer</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/15.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Sprache</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/16.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Sonnerie</h6>
//                   </div>
//                 </div>
//               </div> */}
//               {/* <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/19.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Smartphone</h6>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default page















// "use client"

// import React from 'react'
// import { useState, useEffect } from "react";

// const page = () => {

//   const [headerData, setHeaderData] = useState();


//   function getHeaderInfo(){
//       fetch('http://45.79.185.26/trifusa/public/api/category', {
//           method: 'POST',
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/x-www-form-urlencoded'
//           },
//       // body: formBody
//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//           console.log(responseJson);
//           if (responseJson.success == "true") {
//             setHeaderData(responseJson.category);
//               //console.log(headerData.home_page_image)
//           }
//       })
//       .catch((error) => {
//           console.error(error);
//       });
//   }
//   useEffect(() => {
//       getHeaderInfo();

//   }, [])

// //console.log(headerData?.img_para_1);


//   return (
//     <div>
//        <section
//         id="features-6"
//         className="pt-100 pb-50 features-section division"
//       >
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-10 col-lg-9">
//               <div className="section-title mb-70">
//                 <h2 className="s-50">
//                   Wähle drei gratis <span>kategorien</span> für dein Vergleich
//                   aus
//                 </h2>
//                 <p className="s-21 color--grey">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="fbox-wrapper text-center">
//             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
//             {headerData && 
//               headerData.map((category, index) => (
//               <div className="col" key={category}>
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src={`/assets/img/icon/${category.icon}.png`}
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">{category.name}</h6>
//                   </div>
//                 </div>
//               </div>
//               ))}
              
//               <div className="col">
//                  <div className="fbox-6 fb-1 wow fadeInUp">
//                    <div className="img-style">
//                     <img
//                       src={`http://45.79.185.26/trifusa/public/storage/home_images/${headerData?.cat_image}`}
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Storen & Rollladen</h6>
//                   </div>
//                 </div>
//               </div>
//               {/* <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/2.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Sicherheit</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/3.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Multimedia</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/4.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Heizung</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/5.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Klima</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/6.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Lüftung</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/7.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Roboter</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/8.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Photovoltaik</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/9.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Auto & Ladestation</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/10.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Tür und Tor</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/17.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Solar</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/12.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Medizin</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/13.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Notlicht</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/14.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Haushaltshelfer</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/15.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Sprache</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/16.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Sonnerie</h6>
//                   </div>
//                 </div>
//               </div> 
//                <div className="col">
//                 <div className="fbox-6 fb-1 wow fadeInUp">
//                   <div className="img-style">
//                     <img
//                       src="/assets/img/icon/19.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div className="check-icon">
//                     <span className="flaticon-check"></span>
//                   </div>
//                   <div className="fbox-txt">
//                     <h6 className="s-20">Smartphone</h6>
//                   </div>
//                 </div>
//               </div> 
//                */}
              
              
              
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default page








"use client"

import React from 'react'
import { useState, useEffect } from "react";

const page = () => {

  const [headerData, setHeaderData] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  let api_url = 'http://45.79.185.26/trifusa/public/api/category';

  const handleCategoryClick = (selectedCategoryId) => {
   
   
    console.log("Before:", selectedCategories);
    const isSelected = selectedCategories.includes(selectedCategoryId);
    setSelectedCategories((prevSelectedCategories) =>
    isSelected
      ? prevSelectedCategories.filter((id) => id !== selectedCategoryId)
      : [...prevSelectedCategories, selectedCategoryId]
  );

  console.log("After:", selectedCategories);
  };

  function getHeaderInfo(){
      fetch(api_url, {
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
              setHeaderData(responseJson.category);
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
       <section
        id="features-6"
        className="pt-100 pb-50 features-section division"
      >
        <div className="container">
          {/* <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-70">
                <h2 className="s-50">
                  Wähle drei gratis <span>kategorien</span> für dein Vergleich
                  aus
                </h2>
                <p className="s-21 color--grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div> */}
          <div className="fbox-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {headerData &&
              headerData.map((category) => (
              <div className="col" key={category}>
            
                <div className="fbox-6 fb-1 wow fadeInUp "
                  onClick={() => handleCategoryClick(category.cat_id)}>
                  <div className="img-style">
                    <img
                      src={`http://45.79.185.26/trifusa/public/storage/category/${category?.cat_image}`}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">{category?.cat_name}</h6>
                  </div>
                </div>
              </div>
              ))}
              
              
              
              
              
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
