
'use client';
import Link from 'next/link';
import React,{useState, useEffect}from 'react';
import { apiUrl } from '@/app/constant/constant';
import { useTranslation } from 'react-i18next';

const About = () => {

  const [aboutData, setAboutData] = useState();
    
  const { t } = useTranslation();
  
  function getAboutInfo(){
      fetch( `${apiUrl}api/aboutus/section`, {
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
            setAboutData(responseJson.aboutus[0]);
              console.log(responseJson.aboutus[0])
          }
      })
      .catch((error) => {
          console.error(error);
      });
  }
  useEffect(() => {
      getAboutInfo();

  }, [])



  return (
   <>
   <section className="banner" 
      style={{
        backgroundImage: `url(/assets/img/banner6.jpg)`,
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
              <h3>{t('About Us')}</h3>
              <ul className="breadcrumb">
                <li><Link href="/">{t('Start')}</Link></li>
                <li>{t('About Us')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about-2" className="rel inner-page-hero about-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-lg-10 col-xl-9">
            <div className="about-2-title mb-20">
              <h2 className="s-52 w-700 mb-30"><span>{aboutData?.section1_title}</span></h2>
              <p>{aboutData?.section1_para1} </p>

              <p>{aboutData?.section1_para2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg--04 bg--fixed py-100 ct-01 content-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 order-last order-md-2">
            <div className="txt-block left-column wow fadeInRight">
              {/* <span className="section-id">{aboutData?.section1_title}Welcome to Trisfusa</span> */}
              <h2 className="s-50 w-700">{aboutData?.section2_title}</h2>
              <p className="p-lg">{aboutData?.section2_para1}
              </p>
              <p className="p-lg">
              {aboutData?.section2_para2}
              </p>
            </div>
          </div>
          <div className="col-md-6 order-first order-md-2">
          <div className="img-block j-img video-preview right-column wow fadeInLeft" >
                         <Link className="video-popup2" href="">
                            <div className="video-btn video-btn-xl bg--theme">
                              <div className="video-block-wrapper">
                                <span className="flaticon-play-button"></span>
                              </div>
                            </div>
                          </Link>
                    <img className="img-fluid r-20" src={`${apiUrl}storage/aboutussection/${aboutData?.section2_image}`}  alt="video-preview"/>
                </div>
          </div>
        </div>
      </div>
    </section>
    <div id="about-3" className="pt-100 about-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="a3-1" className="txt-block">
              <h5 className="s-24 w-700 mb-20">{aboutData?.section3_title}</h5>
              <p>
              {aboutData?.section3_para1}
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div id="a3-2" className="txt-block">
              <h5 className="s-24 w-700 mb-20"> {aboutData?.section4_title}</h5>
              <p>
              {aboutData?.section4_para1}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <section id="team-2" className="gr--whitesmoke pb-5 inner-page-hero team-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="text-end">
              <div className="about-2-img a-2-1 r-12">
                <img className="img-fluid" src={`${apiUrl}storage/aboutussection/${aboutData?.section5_image1}`} alt="about-image" />
              </div>
              <div className="about-2-img a-2-2 r-12">
                <img className="img-fluid" src={`${apiUrl}storage/aboutussection/${aboutData?.section5_image3}`} alt="about-image" />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="about-2-img a-2-3 r-12 me-0">
              <img className="img-fluid" src={`${apiUrl}storage/aboutussection/${aboutData?.section5_image2}`} alt="about-image" />
            </div>
            <div className="row">
              <div className="col-md-7 col-lg-6">
               
                  <div className="a2-txt-quote ico-40 o-20">
                    <span className="flaticon-quote"></span>
                  </div>
                 <div className="team-member-photo r-14">
                  <div className="hover-overlay">
                    <img className="img-fluid w-100" src={`${apiUrl}storage/aboutussection/${aboutData?.section5_image4}`} alt="team-member-foto" />
                    <div className="item-overlay"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-6">
                <div className="about-2-img a-2-4 r-12 me-0">
                  <img className="img-fluid"  src={`${apiUrl}storage/aboutussection/${aboutData?.section5_image4}`} alt="about-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-title mb-20">
              <h2 className="s-52"> <span>{aboutData?.section6_title}</span></h2>
              <p>{aboutData?.section6_para1}</p>
            </div>
          </div>
        </div>
        <div className="team-members-wrapper">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div id="tm-2-1" className="team-member wow fadeInUp">
                <div className="team-member-photo r-14">
                  <div className="hover-overlay">
                    <img className="img-fluid w-100" src={`${apiUrl}storage/aboutussection/${aboutData?.section6_image1}`} alt="team-member-foto" />
                    <div className="item-overlay"></div>
                  </div>
                </div>
                <div className="team-member-data">
                  <p className="color--grey">{aboutData?.section6_designation1}</p>
                  <h6 className="s-20 color--black w-700">{aboutData?.section6_name1}</h6>
                  <ul className="tm-social ico-20 clearfix">
                    <li>
                      <Link href="#">
                        <span className="flaticon-facebook"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="flaticon-twitter">{aboutData?.section6_tweeter_link1}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="flaticon-linkedin-logo"></span>
                      </Link>
                    </li>
                  </ul>
                  <hr />
                  <p>{aboutData?.section6_desc1}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div id="tm-2-2" className="team-member wow fadeInUp">
                <div className="team-member-photo r-14">
                  <div className="hover-overlay">
                    <img className="img-fluid w-100" src={`${apiUrl}storage/aboutussection/${aboutData?.section6_image2}`} alt="team-member-foto" />
                    <div className="item-overlay"></div>
                  </div>
                </div>
                <div className="team-member-data">
                  <p className="color--grey">{aboutData?.section6_designation2}</p>
                  <h6 className="s-20 color--black w-700">{aboutData?.section6_name2}</h6>
                  <ul className="tm-social ico-20 clearfix">
                    <li>
                      <Link href="#">
                        <span className="flaticon-facebook"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="flaticon-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="flaticon-linkedin-logo"></span>
                      </Link>
                    </li>
                  </ul>
                  <hr />
                  <p>{aboutData?.section6_desc2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
