'use client'
import React from 'react';
import Link from 'next/link';

const Information = ({ response }) => {
  return (
    <>
    <section className="banner" 
    //   style="background-image:url(assets/img/banner3.jpg)"

      style={{
        backgroundImage: `url(/assets/img/banner3.jpg)`,
        backgroundSize: 'cover', // You can adjust these styles as needed
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '540px', // Set the width and height as needed
      }}
      >
  
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="banner-caption">
                <h3>Full Information</h3>
                <ul className="breadcrumb">
                        <li><Link href="/">Start</Link></li>
                        <li>Full Information</li>
                    </ul>
            </div>
        </div>
    </div>
</div>
</section>
</>
  );
};

export default Information;
