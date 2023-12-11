// "use client"

// import Link from 'next/link'
// import React from 'react'
// import { apiUrl } from '@/app/constant/constant';
// import { useState, useEffect } from "react";

// const TermsAndConditions = () => {

//     const [termsData, setTermsData] = useState();
//     const obj = {
//         "page_name" : "terms&condition",
//         "lang": null
//         }
        
//     function getTermsInfo(){
//         fetch( `${apiUrl}api/footer/cutromerservices`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded'
                
//             },
//        body: JSON.stringify(obj)
//         })
//         .then((response) => response.json())
//         .then((responseJson) => {
            
            
//             if (responseJson.success == "true") {
//                 setTermsData(responseJson.footer_section);
//                 //console.log(headerData.home_page_image)
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     }
//     useEffect(() => {
//         getTermsInfo();
// console.log(termsData)
//     }, [])




//   return (
//     <div>
      

//       <section className="banner" 
//     //   style="background-image:url(assets/img/banner1.jpg)"

//     // style={{
//     //     backgroundImage: `url(/assets/img/banner1.jpg)`,
//     //     backgroundSize: 'cover', // You can adjust these styles as needed
//     //     backgroundRepeat: 'no-repeat',
//     //     width: '100%',
//     //     height: '540px', // Set the width and height as needed
//     //   }}

//       style={{
//             backgroundImage: `url(${apiUrl}storage/otherpagesection/${termsData?.page_img})`,
//           }}

//       >
//     <div className="container">
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="banner-caption">
//                     <h3>{termsData?.title}</h3>
//                     <ul className="breadcrumb">
//                         <li>
//                         <Link href="/">Start</Link>
//                         </li>
//                         <li>Terms Condition</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>

// <section id="terms-page" className="gr--whitesmoke pb-80 inner-page-hero division">
//     <div className="container">
//         <div className="row justify-content-center">
//             <div className="col-xl-10">
//                 <div className="inner-page-title">
//                     <h2 className="s-52">Allgemeine Geschäftsbedingungen für <span>Trisfusa</span></h2>
//                 </div>
//                 <div className="txt-block legal-info">
//                     <h5 className="s-24 w-700"><span>1.</span> Geltungsbereich</h5>
//                     <p>Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Plattform Trisfusa.
//                      Durch die Nutzung der Plattform erklären Sie sich mit diesen Bedingungen 
//                      einverstanden.</p>

//                     <h5 className="s-24 w-700"><span>2.</span> Nutzungsbeschränkungen</h5>
//                     <p>Die Nutzung von Trisfusa ist nur gemäß dieser Bedingungen und geltendem Recht
//                      gestattet. Es ist Ihnen untersagt, Inhalte hochzuladen, die gegen geltendes
//                       Recht verstoßen oder die Rechte Dritter verletzen.</p>

//                     <h5 className="s-24 w-700"><span>3.</span> Registrierung und Benutzerkonto</h5>
//                     <p>Für bestimmte Funktionen der Plattform kann eine Registrierung erforderlich sein.
//                      Sie sind  verpflichtet, genaue und aktuelle Informationen bereitzustellen und Ihr 
//                      Passwort sicher zu halten.</p>

//                     <h5 className="s-24 w-700"><span>4.</span> Geistiges Eigentum</h5>
//                     <p>Alle Inhalte auf Trisfusa, einschließlich Texte, Grafiken, Logos und Software, 
//                     sind urheberrechtlich geschützt. Die Verwendung oder Vervielfältigung dieser 
//                     Inhalte ohne ausdrückliche Genehmigung ist untersagt.</p>

//                     <h5 className="s-24 w-700"><span>5.</span> Haftungsausschluss</h5>
//                     <p>Trisfusa übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit oder
//                      Aktualität der bereitgestellten Informationen. Die Nutzung der Plattform erfolgt
//                      auf eigene Gefahr.</p>

//                     <h5 className="s-24 w-700"><span>6.</span> Datenschutz</h5>
//                     <p>Wir respektieren Ihre Privatsphäre. Unsere Datenschutzrichtlinie beschreibt,
//                      wie wir personenbezogene Daten erfassen, verwenden und schützen.</p>

//                     <h5 className="s-24 w-700"><span>7.</span> Änderungen der Bedingungen</h5>
//                     <p>Trisfusa behält sich das Recht vor, diese Allgemeinen Geschäftsbedingungen 
//                     jederzeit zu ändern. Die aktualisierten Bedingungen treten in Kraft, sobald sie auf
//                      der Plattform veröffentlicht werden.</p>

//                     <h5 className="s-24 w-700"><span>8.</span> Beendigung der Nutzung</h5>
//                     <p>Trisfusa kann Ihren Zugang zur Plattform jederzeit aus beliebigem Grund
//                      einschränken oder beenden, insbesondere im Falle von Verstößen gegen diese
//                       Bedingungen.</p>

//                     <h5 className="s-24 w-700"><span>9.</span> Geltendes Recht und Gerichtsstand</h5>
//                     <p>Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen des 
//                     [Landes/Staates]. Bei Streitigkeiten ist das örtlich zuständige Gericht in [Ort]
//                      zuständig.</p>


//                     <p>Vielen Dank, dass Sie Trisfusa nutzen! Bei Fragen oder Bedenken stehen wir 
//                     Ihnen gerne zur Verfügung.</p>

//                 </div>


//             </div>
//         </div>
//     </div>
// </section>

//     </div>
//   )
// }

// export default TermsAndConditions







// "use client"

// import Link from 'next/link'
// import React from 'react'
// import { apiUrl } from '@/app/constant/constant';
// import { useState, useEffect } from "react";

// // const TermsAndConditions = () => {

// //     const [termsData, setTermsData] = useState([]);
// //     const obj = {
// //         "page_name" : "terms&conditions"
// //         }
        
// //         function getTermsInfo(){
// //             fetch( `${apiUrl}api/footer/cutromerservices`, {
// //                 method: 'POST',
// //                 // headers: {
// //                 //     'Accept': 'application/json',
// //                 //     'Content-Type': 'application/x-www-form-urlencoded'
                    
// //                 // },
// //            body: obj
// //             })
// //             .then((response) => response.json())
// //             .then((responseJson) => {
                
// //                 console.log(responseJson);
// //                 console.log(JSON.stringify(responseJson));
// //                 if (responseJson.success == "true") {
// //                     setTermsData(responseJson.footer_section);
// //                     //console.log(headerData.home_page_image)
// //                 }
// //             })
// //             .catch((error) => {
// //                 console.error(error);
// //             });
// //         }
   
    
// //     useEffect(() => {
// //         getTermsInfo();
// // console.log(termsData)
// //     }, [])


//     const TermsAndConditions = () => {
//         useEffect(() => {
//           const fetchData = async () => {
//             try {
//               const response = await fetch('http://45.79.185.26/trifusa/public/api/footer/cutromerservices', {
//                 method: 'POST',
//                 headers: {
//                   // Add any headers if needed
//                 },
//                 body: new URLSearchParams({
//                   'page_name': 'cookie&policy'
//                 }),
//               });
      
//               if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//               }
      
//               const data = await response.json();
//               console.log(data);
//             } catch (error) {
//               console.error('Error:', error);
//             }
//           };
      
//           fetchData();
//         }, []); 
      
       
//       };


//   return (
//     <div>
      

//       <section className="banner" 
//     //   style="background-image:url(assets/img/banner1.jpg)"

//     // style={{
//     //     backgroundImage: `url(/assets/img/banner1.jpg)`,
//     //     backgroundSize: 'cover', // You can adjust these styles as needed
//     //     backgroundRepeat: 'no-repeat',
//     //     width: '100%',
//     //     height: '540px', // Set the width and height as needed
//     //   }}

//       style={{
//             backgroundImage: `url(${apiUrl}storage/otherpagesection/${termsData?.page_img})`,
//           }}

//       >
//     <div className="container">
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="banner-caption">
//                     <h3>{termsData?.title}</h3>
//                     <ul className="breadcrumb">
//                         <li>
//                         <Link href="/">Start</Link>
//                         </li>
//                         <li>Terms Condition</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>

// <section id="terms-page" className="gr--whitesmoke pb-80 inner-page-hero division">
//     <div className="container">
//         <div className="row justify-content-center">
//             <div className="col-xl-10">
//                 <div className="inner-page-title">
//                     <h2 className="s-52">Allgemeine Geschäftsbedingungen für <span>Trisfusa</span></h2>
//                 </div>
//                 <div className="txt-block legal-info">
//                     <h5 className="s-24 w-700"><span>1.</span> Geltungsbereich</h5>
//                     <p>Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Plattform Trisfusa.
//                      Durch die Nutzung der Plattform erklären Sie sich mit diesen Bedingungen 
//                      einverstanden.</p>

//                     <h5 className="s-24 w-700"><span>2.</span> Nutzungsbeschränkungen</h5>
//                     <p>Die Nutzung von Trisfusa ist nur gemäß dieser Bedingungen und geltendem Recht
//                      gestattet. Es ist Ihnen untersagt, Inhalte hochzuladen, die gegen geltendes
//                       Recht verstoßen oder die Rechte Dritter verletzen.</p>

//                     <h5 className="s-24 w-700"><span>3.</span> Registrierung und Benutzerkonto</h5>
//                     <p>Für bestimmte Funktionen der Plattform kann eine Registrierung erforderlich sein.
//                      Sie sind  verpflichtet, genaue und aktuelle Informationen bereitzustellen und Ihr 
//                      Passwort sicher zu halten.</p>

//                     <h5 className="s-24 w-700"><span>4.</span> Geistiges Eigentum</h5>
//                     <p>Alle Inhalte auf Trisfusa, einschließlich Texte, Grafiken, Logos und Software, 
//                     sind urheberrechtlich geschützt. Die Verwendung oder Vervielfältigung dieser 
//                     Inhalte ohne ausdrückliche Genehmigung ist untersagt.</p>

//                     <h5 className="s-24 w-700"><span>5.</span> Haftungsausschluss</h5>
//                     <p>Trisfusa übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit oder
//                      Aktualität der bereitgestellten Informationen. Die Nutzung der Plattform erfolgt
//                      auf eigene Gefahr.</p>

//                     <h5 className="s-24 w-700"><span>6.</span> Datenschutz</h5>
//                     <p>Wir respektieren Ihre Privatsphäre. Unsere Datenschutzrichtlinie beschreibt,
//                      wie wir personenbezogene Daten erfassen, verwenden und schützen.</p>

//                     <h5 className="s-24 w-700"><span>7.</span> Änderungen der Bedingungen</h5>
//                     <p>Trisfusa behält sich das Recht vor, diese Allgemeinen Geschäftsbedingungen 
//                     jederzeit zu ändern. Die aktualisierten Bedingungen treten in Kraft, sobald sie auf
//                      der Plattform veröffentlicht werden.</p>

//                     <h5 className="s-24 w-700"><span>8.</span> Beendigung der Nutzung</h5>
//                     <p>Trisfusa kann Ihren Zugang zur Plattform jederzeit aus beliebigem Grund
//                      einschränken oder beenden, insbesondere im Falle von Verstößen gegen diese
//                       Bedingungen.</p>

//                     <h5 className="s-24 w-700"><span>9.</span> Geltendes Recht und Gerichtsstand</h5>
//                     <p>Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen des 
//                     [Landes/Staates]. Bei Streitigkeiten ist das örtlich zuständige Gericht in [Ort]
//                      zuständig.</p>


//                     <p>Vielen Dank, dass Sie Trisfusa nutzen! Bei Fragen oder Bedenken stehen wir 
//                     Ihnen gerne zur Verfügung.</p>

//                 </div>


//             </div>
//         </div>
//     </div>
// </section>

//     </div>
//   )


// export default TermsAndConditions




'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { apiUrl } from '@/app/constant/constant';

const TermsAndConditions = () => {
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
                    <Link href="/">Start</Link>
                  </li>
                  <li>{termsData?.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="terms-page" className="gr--whitesmoke pb-80 inner-page-hero division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
            <div className="inner-page-title">
             </div>
              <div className="txt-block legal-info">
              <div className="s-52" dangerouslySetInnerHTML={{ __html: termsData?.page_description || '' }}> </div>
                  
                  </div>
               </div>
            </div>
          </div>
        
      </section>
    </div>
  );
};

export default TermsAndConditions;
