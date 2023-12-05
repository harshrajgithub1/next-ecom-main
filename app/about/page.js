// 'use client';
import Link from 'next/link';
import React from 'react';


const About = () => {
  return (
   <div>
   <section className="banner" 
// style={{ backgroundImage: 'url(assets/img/banner6.jpg)' }}

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
              <h3>About us</h3>
              <ul className="breadcrumb">
                <li><Link href="/">Start</Link></li>
                <li>About us</li>
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
            <div className="about-2-title mb-60">
              <h2 className="s-52 w-700 mb-30">Welcome to  sas<span>Trisfusa</span></h2>
              <p>Trisfusa: Ihr ultimativer Begleiter für Smarthome-Geräte und Automations technologien!
               Entdecken, vergleichen und finden Sie die perfekten Lösungen für Ihr 
               Smarthome und Ihre Automatisierungsbedürfnisse. </p>

              <p>Mit Trisfusa treffen Sie informierte Entscheidungen, vereinfachen
                Ihre Heimautomatisierungsreise und gestalten eine intelligentere Zukunft. 
                Unsere Spezialisierung liegt in der Überprüfung von Kompatibilität und Schnittstellen,
                 um sicherzustellen, dass alle
                Ihre Geräte nahtlos miteinander arbeiten.</p>
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
              <span className="section-id">Welcome to Trisfusa</span>
              <h2 className="s-50 w-700">About Trisfusa</h2>
              <p className="p-lg">
                Mit über 20 Jahren Erfahrung in branchenübergreifenden Betrieben sind wir bei 
                Smarthomeconsulting Pioniere auf dem Gebiet der Gebäudeautomation und 
                Smarthome-Systeme. Unsere lange Historie ermöglicht es uns, ein tiefgehendes
                 Verständnis für die sich stetig entwickelnde Technologie zu bieten und unsere 
                 Kunden mit Expertise zu begleiten.
              </p>
              <p className="p-lg">
                Arthur Peter Lorenzen, Gründer von Smarthomeconsulting, 
                wurde am 23. Februar 1985 in Querfurt, Sachsen-Anhalt, geboren. 
                Aufgewachsen auf dem Land, konnte er viele wertvolle Erfahrungswerte durchleben 
                und beobachten, insbesondere im Kontext der Wendekultur. Diese persönlichen 
                Erlebnisse prägten seine Sichtweise und schärften seinen Blick für die 
                Anforderungen und Potenziale im Bereich der Gebäudeautomation.
              </p>
            </div>
          </div>
          <div className="col-md-6 order-first order-md-2">
            <div className="img-block j-img video-preview right-column wow fadeInLeft">
              <Link className="video-popup2" href="https://www.youtube.com/embed/yDNWVRmRHlY">
                <div className="video-btn video-btn-xl bg--theme">
                  <div className="video-block-wrapper"><span className="flaticon-play-button"></span></div>
                </div>
              </Link>
              <img className="img-fluid r-20" src="assets/img/img-17.jpg" alt="video-preview" />
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
              <h5 className="s-24 w-700 mb-20">Mission</h5>
              <p>
                Unsere Mission bei Trisfusa ist es, die Welt der Smart-Home-Geräte und 
                Automationstechnologien zu vereinfachen. Wir möchten Verbrauchern, Architekten 
                und Bauherren dabei helfen, intelligente Entscheidungen zu treffen, die ihr Leben
                 bereichern und ihre Häuser in smarte und effiziente Umgebungen verwandeln. Unser
                  langfristiges Ziel ist es, die Welt der Automatisierungen im Eigenheim und 
                  Industriegebäude bis zum Jahr 2050 zu revolutionieren, indem wir die Kompatibilität
                   und Schnittstellenzugehörigkeit in den Mittelpunkt stellen.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div id="a3-2" className="txt-block">
              <h5 className="s-24 w-700 mb-20">Our Vision</h5>
              <p>
                Unsere Vision ist es, eine globale Community von Benutzern aufzubauen, die durch
                 unsere Plattform in der Lage sind, die besten Lösungen für ihre individuellen
                  Bedürfnisse zu finden. Wir streben danach, der vertrauenswürdigste Anlaufpunkt 
                  für alle zu sein, die ihr Zuhause oder ihre Industriegebäude mit smarter Technologie
                   gestalten möchten. Dabei setzen wir höchste Standards in Bezug auf Kompatibilität 
                   und Benutzerfreundlichkeit und führen die Welt bis 2050 in eine Ära der Automation
                    und Effizienz, in der die nahtlose Integration von Geräten und Systemen im 
                    Vordergrund steht.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="statistic-5" className="py-100 statistic-section division">
      <div className="container">
        <div className="statistic-5-wrapper">
          <div className="row row-cols-1 row-cols-md-4">
            <div className="col">
              <div id="sb-5-1" className="wow fadeInUp">
                <div className="statistic-block">
                  <div className="statistic-digit">
                    <h2 className="s-44 w-700">
                      <span className="count-element">26</span>.<span className="count-element">62</span>k
                    </h2>
                  </div>
                  <div className="statistic-txt">
                    <h5 className="s-19 w-700">Happy Customers</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div id="sb-5-2" className="wow fadeInUp">
                <div className="statistic-block">
                  <div className="statistic-digit">
                    <h2 className="s-44 w-700">
                      <span className="count-element">13</span>.<span className="count-element">54</span>k
                    </h2>
                  </div>
                  <div className="statistic-txt">
                    <h5 className="s-19 w-700">Positive Ratings</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div id="sb-5-3" className="wow fadeInUp">
                <div className="statistic-block">
                  <div className="statistic-digit">
                    <h2 className="s-44 w-700">
                      <span className="count-element">487</span>k
                    </h2>
                  </div>
                  <div className="statistic-txt">
                    <h5 className="s-19 w-700">Smart Product</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div id="sb-5-4" className="wow fadeInUp">
                <div className="statistic-block">
                  <div className="statistic-digit">
                    <h2 className="s-44 w-700">
                      <span className="count-element">100</span>+
                    </h2>
                  </div>
                  <div className="statistic-txt">
                    <h5 className="s-19 w-700">Teams</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="team-2" className="gr--whitesmoke pb-40 inner-page-hero team-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="text-end">
              <div className="about-2-img a-2-1 r-12">
                <img className="img-fluid" src="/assets/img/a2-1.jpg" alt="about-image" />
              </div>
              <div className="about-2-img a-2-2 r-12">
                <img className="img-fluid" src="/assets/img/a2-2.jpg" alt="about-image" />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="about-2-img a-2-3 r-12">
              <img className="img-fluid" src="/assets/img/a2-3.jpg" alt="about-image" />
            </div>
            <div className="row">
              <div className="col-md-7 col-lg-6">
                <div className="a2-txt bg--black-400 pattern-01 bg--fixed color--white r-12">
                  <div className="a2-txt-quote ico-40 o-20">
                    <span className="flaticon-quote"></span>
                  </div>
                  <p>
                    Wir von Smarthomeconsulting bieten dir mit Trisfusa die einzigartige Möglichkeit, 
                    Vergleiche im Smarthome-Bereich zu machen. Unsere Plattform ermöglicht es dir nicht 
                    nur, die besten Lösungen zu finden, sondern auch, die Kompatibilität und 
                    Schnittstellenzugehörigkeit deiner Geräte sicherzustellen. Damit kannst du
                    intelligente Entscheidungen treffen und dein Smarthome-Erlebnis optimieren.
                  </p>
                  <p className="a2-txt-author">Arthur Lorenzen<span>CEO & CO-FOUNDER</span></p>
                </div>
              </div>
              <div className="col-md-5 col-lg-6">
                <div className="about-2-img a-2-4 r-12">
                  <img className="img-fluid" src="/assets/img/a2-4.jpg" alt="about-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-title mb-80">
              <h2 className="s-52">Zum <span>Team</span></h2>
              <p>Das Team was Ihre Welt und Ihre Ansicht zu Modernität revolutionieren wird. 
              Wir freuen uns euch in das Jahr 2050 zu katapultieren.</p>
            </div>
          </div>
        </div>
        <div className="team-members-wrapper">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div id="tm-2-1" className="team-member mb-60 wow fadeInUp">
                <div className="team-member-photo r-14">
                  <div className="hover-overlay">
                    <img className="img-fluid" src="/assets/img/team-1.jpg" alt="team-member-foto" />
                    <div className="item-overlay"></div>
                  </div>
                </div>
                <div className="team-member-data">
                  <p className="color--grey">CEO & Founder</p>
                  <h6 className="s-20 color--black w-700">Arthur Lorenzen</h6>
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
                  <p>Als Gründer von Smarhomeconsulting biete ich euch die beste Beratung aus erster
                   Hand</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div id="tm-2-2" className="team-member mb-60 wow fadeInUp">
                <div className="team-member-photo r-14">
                  <div className="hover-overlay">
                    <img className="img-fluid" src="/assets/img/team-2.jpg" alt="team-member-foto" />
                    <div className="item-overlay"></div>
                  </div>
                </div>
                <div className="team-member-data">
                  <p className="color--grey">Administration & Finanzen</p>
                  <h6 className="s-20 color--black w-700">Blanka Lorenzen</h6>
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
                  <p>Ich werde für euch immer da sein, solltet Ihr mich nicht sehen, werde ich für euch 
                  am Telefon sein.</p>
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

export default About;
