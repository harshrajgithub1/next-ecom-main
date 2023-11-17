"use client";
import Link from "next/link";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const page = () => {
  

  return (
    <div>
      <section id="hero-1" className="bg--scroll hero-section">
        <img
          src="/assets/img/slider/slider1.jpg"
          alt=""
          className="img-fluid banner-img"
        />

        <div className="container container-content">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="hero-1-img wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="assets/img/slider/img1.png"
                  alt="hero-image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-1-txt color--white wow fadeInRight">
                <h2 className="s-47">
                  Jetzt vergleichen und deine Wohnung{" "}
                  <span>optimal vernetzen</span>
                </h2>
                <p className="p-xl">
                  Trishala Connect bietet dir einzigartige Moglichkeiten auf den
                  neusten Stand der Technik zu kommen. Simple better advice
                </p>
                <Link
                  href="#banner-3"
                  className="btn r-04 btn--theme hover--tra-white"
                >
                  Get started for free
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
      </section>

      <section
        id="features-6"
        className="pt-100 pb-50 features-section division"
      >
        <div className="container">
          <div className="row justify-content-center">
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
          </div>
          <div className="fbox-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Beleuchtung</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/18.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Storen & Rollladen</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Sicherheit</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Multimedia</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Heizung</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Klima</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Lüftung</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/7.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Roboter</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/8.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Photovoltaik</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/9.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Auto & Ladestation</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/10.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Tür und Tor</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/17.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Solar</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/12.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Medizin</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/13.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Notlicht</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/14.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Haushaltshelfer</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/15.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Sprache</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/16.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Sonnerie</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fbox-6 fb-1 wow fadeInUp">
                  <div className="img-style">
                    <img
                      src="/assets/img/icon/19.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <span className="flaticon-check"></span>
                  </div>
                  <div className="fbox-txt">
                    <h6 className="s-20">Smartphone</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="lnk-1"
        className="py-100 ct-02 content-section division bg--02"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="img-block left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/assets/img/img-10.png"
                  alt="content-image"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txt-block right-column wow fadeInLeft">
                <span className="section-id">Lorem, ipsum dolor</span>
                <div className="section-title text-start">
                  <h2 className="s-50">
                    Lösungen <span>für ein</span> optimiertes finden
                  </h2>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                  culpa alias nulla incidunt animi ullam optio quasi quos
                  delectus hic! Quidem illo eligendi facilis ex repellat vero
                  consequuntur nulla mollitia.
                </p>
                <h5 className="s-24">Lorem ipsum dolor sit amet</h5>
                <ul className="simple-list">
                  <li className="list-item">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit ducimus modi voluptatum repellendus
                      perferendis temporibus.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="mb-0">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eius nam eaque mollitia. Exercitationem, veritatis minima.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lik-2" className="pt-100 ct-04 content-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-last order-md-2">
              <div className="txt-block left-column wow fadeInRight">
                <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">1</div>
                    <span className="cbox-2-line"></span>
                  </div>
                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">
                      Umfassende Vergleichsmöglichkeiten
                    </h5>
                    <p>
                      Trisfusa bietet eine breite Palette von Smarthome-Geräten
                      und Automationstechnologien zur Auswahl. Mit unserer
                      Plattform kannst du Produkte und Lösungen in verschiedenen
                      Kategorien vergleichen, um diejenigen zu finden, die am
                      besten zu deinen Bedürfnissen passen.
                    </p>
                  </div>
                </div>
                <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">2</div>
                    <span className="cbox-2-line"></span>
                  </div>
                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">
                      Kompatibilitäts- und Schnittstellenüberprüfung
                    </h5>
                    <p>
                      {" "}
                      Wir legen besonderen Wert auf die Gewährleistung der
                      Kompatibilität und Schnittstellenzugehörigkeit deiner
                      Geräte. Trisfusa hilft dir, sicherzustellen, dass alle
                      deine Smarthome-Geräte nahtlos miteinander interagieren
                      und reibungslos funktionieren.
                    </p>
                  </div>
                </div>
                <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">3</div>
                  </div>
                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">
                      Expertenberatung und Benutzerfreundlichkeit
                    </h5>
                    <p className="mb-0">
                      Unser Team von Smarthome-Experten steht dir zur Seite und
                      bietet persönliche Beratung, um sicherzustellen, dass du
                      fundierte Entscheidungen treffen kannst. Gleichzeitig
                      haben wir unsere Plattform benutzerfreundlich gestaltet,
                      damit du leicht navigieren und die besten Entscheidungen
                      für dein Smarthome treffen kannst.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-first order-md-2">
              <div className="img-block wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="/assets/img/tablet-01.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

	  <div className="row justify-content-center">
			<div className="col-md-10 col-lg-9">
				<div className="section-title mb-70">
					<h2 className="s-50">Here’s what our <span>amazing clients</span> are saying</h2>
					<p className="s-21 color--grey">Lorem, ipsum dolor sit amet consectetur adipisicing</p>
				</div>
			</div>
		</div>
     

     
<section id="reviews-1" className="pt-100 shape--06 shape--gr-whitesmoke reviews-section">
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


      <Carousel>
            
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

        </Carousel> 
				
			</div>
		</div>
	</div>
</section>

      <div id="rating-1" className="pt-70 rating-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="rating-title mb-40">
                <h5 className="s-18 color--grey w-500">
                  Our clients love us as much as we love them
                </h5>
              </div>
            </div>
          </div>
          <div className="rating-1-wrapper">
            <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
              <div className="col">
                <div id="rb-1-1" className="rbox-1">
                  <div className="rbox-1-img">
                    <img
                      className="img-fluid light-theme-img"
                      src="/assets/img/brand-21.png"
                      alt="feature-image"
                    />
                  </div>
                  <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star-half-empty mr-5"></span>
                    &nbsp; 4.7/5
                  </div>
                </div>
              </div>
              <div className="col">
                <div id="rb-1-2" className="rbox-1">
                  <div className="rbox-1-img">
                    <img
                      className="img-fluid light-theme-img"
                      src="/assets/img/brand-22.png"
                      alt="feature-image"
                    />
                  </div>
                  <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star mr-5"></span>
                    &nbsp; 4.95/5
                  </div>
                </div>
              </div>
              <div className="col">
                <div id="rb-1-3" className="rbox-1">
                  <div className="rbox-1-img">
                    <img
                      className="img-fluid light-theme-img"
                      src="assets/img/brand-23.png"
                      alt="feature-image"
                    />
                  </div>
                  <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star-1 mr-5"></span>
                    &nbsp; 4.24/5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="banner-3" className="pt-100 banner-section">
        <div className="container">
          <div className="banner-3-wrapper bg--03 bg--scroll r-16">
            <div className="banner-overlay">
              <div className="row">
                <div className="col">
                  <div className="banner-3-txt color--white">
                   
                    <h2 className="s-48">Produkte senden</h2>
                    <p className="p-xl">
                      Endecke Trisfusa und helfe dabei noch mehr Vergleiche zu
                      machen, sende uns deine Produkte die wir nicht kennen
                    </p>
                    <Link
                      href="#"
                      className="btn r-04 btn--theme hover--tra-white"
                    >
                      Jetzt Produkte senden
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
