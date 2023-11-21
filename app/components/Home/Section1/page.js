"use client"
import React from 'react'
import { useState, useEffect } from "react";
const page = () => {
    const [headerData, setHeaderData] = useState();


    function getHeaderInfo(){
        fetch('http://45.79.185.26/trifusa/public/api/home/header/image', {
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
          src="/assets/img/slider/slider1.jpg"
          alt=""
          className="img-fluid banner-img"
        />
{/* <div>
      <h1>{t('hello')}</h1>
      <p>{t('welcome')}</p>
    </div> */}
        <div className="container container-content">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="hero-1-img wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="http://45.79.185.26/trifusa/public/storage/home_images/home_page_image"
                  alt="hero-image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-1-txt color--white wow fadeInRight">
                <h2 className="s-47">
                  {headerData?.img_header_1}
                </h2>
                <p className="p-xl">
                    {headerData?.img_para_1}
                </p>
                {/* <Link
                  href="#banner-3"
                  className="btn r-04 btn--theme hover--tra-white"
                >
                  Get started for free
                </Link> */}
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
      </section>

    </div>
  )
}

export default page
