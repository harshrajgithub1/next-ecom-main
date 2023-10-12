import Link from "next/link";
import React from "react";

const Comparison = () => {
  return (
    <div>
      <section
        className="banner"
        // style="background-image:url(assets/img/banner2.jpg)"
        style={{
        background: `url('/assets/img/banner2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '540px', // Set your desired height
      }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>Comparison</h3>

                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>Vergleich</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="comparison"
        className="comparison rel inner-page-hero about-section division"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="about-2-title mb-60 text-center wow fadeInUp">
                <span className="section-id">Vergleich</span>
                <h2 className="s-52 mb-30">
                  We Have <span>Many Service</span> Currentrly
                </h2>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat alias possimus vitae. Eveniet dicta voluptatem
                  voluptatibus soluta vero enim iusto maxime cum corrupti odio
                  nemo sed eaque velit, vitae similique!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="vergleich wow fadeInUp">
                <div className="img-style">
                  <img src="/assets/img/img1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="content-style">
                  <h3>Horizon Villa</h3>
                  <p>Smart Villa</p>
                  <a href="#">Compare</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="vergleich wow fadeInUp">
                <div className="img-style">
                  <img src="/assets/img/img1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="content-style">
                  <h3>Horizon Villa</h3>
                  <p>Smart Villa</p>
                  <a href="#">Compare</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="vergleich wow fadeInUp">
                <div className="img-style">
                  <img src="/assets/img/img1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="content-style">
                  <h3>Horizon Villa</h3>
                  <p>Smart Villa</p>
                  <a href="#">Compare</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="vergleich wow fadeInUp">
                <div className="img-style">
                  <img src="/assets/img/img1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="content-style">
                  <h3>Horizon Villa</h3>
                  <p>Smart Villa</p>
                  <a href="#">Compare</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="vergleich wow fadeInUp">
                <div className="img-style">
                  <img src="/assets/img/img1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="content-style">
                  <h3>Horizon Villa</h3>
                  <p>Smart Villa</p>
                  <a href="#">Compare</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="vergleich wow fadeInUp">
                <div className="img-style">
                  <img src="/assets/img/img1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="content-style">
                  <h3>Horizon Villa</h3>
                  <p>Smart Villa</p>
                  <a href="#">Compare</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="vergleich wow fadeInUp">
                <div className="img-style">
                  <img src="/assets/img/img1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="content-style">
                  <h3>Horizon Villa</h3>
                  <p>Smart Villa</p>
                  <a href="#">Compare</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="vergleich wow fadeInUp">
                <div className="img-style">
                  <img src="/assets/img/img1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="content-style">
                  <h3>Horizon Villa</h3>
                  <p>Smart Villa</p>
                  <a href="#">Compare</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comparison;
