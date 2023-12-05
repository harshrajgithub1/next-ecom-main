"use client"
import React from 'react'
import { useState, useEffect } from "react";
import Link from 'next/link';
import { apiUrl } from '@/app/constant/constant';

const Section1 = () => {
    const [headerData, setHeaderData] = useState();

    function getHeaderInfo(){
        fetch( `${apiUrl}api/home/header/image`, {
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
                setHeaderData(responseJson.header_image[0]);
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
        <section id="hero-1" className="bg--scroll hero-section">
          <img
              src={`${apiUrl}storage/home_images/${headerData?.home_page_image}`}
               alt=""
               className="img-fluid banner-img"
        />

        <div className="container container-content">
          <div className="row d-flex align-items-center">
            
            <div className="col-lg-6">
              <div className="hero-1-txt color--white wow fadeInRight">
                <h2 className="s-47">
                  {headerData?.img_header_1}
                </h2>
                <p className="p-xl">
                  {headerData?.img_para_1}
                </p>
                <Link
                  href="#banner-3"
                  className="btn r-04 btn--theme hover--tra-white"
                >
                 {headerData?.img_h_text}
                </Link>
              </div>
            </div>

            <div className="col-md-12">
              <div className="select_section wow fadeInUp">
                <select name="" id="select1" className="form-control">
                  <option value="Industrie">Industrie</option>
                  <option value="Privat">Privat</option>
                </select>

                <select name="" id="select2" className="form-control">
                  <option value="">Mehrfamilienhaus</option>
                  <option value="">Umbau</option>
                  <option value="">Büro</option>
                  <option value="">Werkstatt</option>
                  <option value="">Lagerhalle</option>
                  <option value="">Produktion</option>
                </select>

                <select name="" id="select3" className="form-control">
                  <option value="">Systeme</option>
                  <option value="">Einzelsysteme</option>
                  <option value="">Kompaktsysteme</option>
                  <option value="">Alle</option>
                </select>

                <select name="" id="select4" className="form-control">
                  <option value="">Anzahl Räume</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>

                <select name="" id="countries" className="form-control">
                  <option value="">Land</option>
                  <option value="">German</option>
                  <option value="">France</option>
                  <option value="">US</option>
                </select>

                <button className="btn btn-submit">Ich habe schon etwas</button>
              </div>
              
            </div>
          </div>
        </div>
      </section>



      <section id="select" className="mobile_select">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="select_section wow fadeInUp">
                <select name="" id="" className="form-control">
                  <option value="">Industrie</option>
                  <option value="">Privat</option>
                </select>

                <select name="" id="" className="form-control">
                  <option value="">Mietwohnung</option>
                  <option value="">Eigentum</option>
                  <option value="">Privat</option>
                </select>

                <select name="" id="" className="form-control">
                  <option value="">Systeme</option>
                  <option value="">Einzelsysteme</option>
                  <option value="">Kompaktsysteme</option>
                  <option value="">Alle</option>
                </select>

                <select name="" id="" className="form-control">
                  <option value="">Anzahl Räume</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>

                <select name="" id="" className="form-control">
                  <option value="">Land</option>
                  <option value="">German</option>
                  <option value="">France</option>
                  <option value="">US</option>
                </select>

                <button className="btn btn-submit">Ich habe schon etwas</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-70">
                <h2 className="s-50">
              
                {headerData?.below_image_text}
              
                </h2>
                {/* <p className="s-21 color--grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p> */}
              </div>
            </div>
          </div>
      </section>


    </div>
  )
}

export default Section1
