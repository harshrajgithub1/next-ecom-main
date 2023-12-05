// "use client";
// import Link from "next/link";
// import React from "react";
// import { useTranslation } from 'next-i18next';


// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';


// const page = () => {
//   const {t} = useTranslation('common');

//   return (
    
//   )
// }

// export default page;




"use client"
import React from 'react'
import Header from '../app/components/Header/Header';
import Section1 from './components/Home/Section1';
import Section2 from './components/Home/Section2'
import Section3 from './components/Home/Section3';

import Section5 from './components/Home/Section5';
import Section6 from './components/Home/Section6';
import Section7 from './components/Home/Section7';


const page = () => {
  return (
    <div>

<Section1 />
<Section2 />
<Section3 />

<Section5 />
<Section6 />
<Section7 />

       
    </div>
  )
}

export default page
