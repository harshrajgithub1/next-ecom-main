import Link from "next/link";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <section
        className="banner"
        // style="background-image:url(assets/img/banner1.jpg)"

        style={{
        backgroundImage: `url(/assets/img/banner1.jpg)`,
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
                <h3>Gallery</h3>
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>Gallery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="project-1"
        className="gr--whitesmoke inner-page-hero single-project pb-100"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-2-title mb-60 wow fadeInUp">
                <h2 className="s-52 mb-30">
                  We provide <span>solutions</span> for your creative ideas
                </h2>
                <p className="mb-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates, eveniet quidem autem animi necessitatibus modi
                  commodi, iure cumque exercitationem neque numquam ipsa quod
                  nam illum tempore officiis harum architecto. Consectetur.
                </p>
              </div>
            </div>
          </div>

          <div className="row d-flex align-items-center project-inner-img">
            <div className="col-md-4 mt-30">
              <div className="project-image project-preview top-img r-10 wow fadeInUp">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/assets/img/projects/project-10.jpg"
                    alt="project-preview"
                  />
                  <div className="item-overlay"></div>
                </div>
                <div className="project-link ico-35 color--white">
                  <a
                    className="image-link"
                    href="assets/img/projects/project-10.jpg"
                    title=""
                  >
                    <span className="flaticon-visibility"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-30">
              <div className="project-image project-preview r-10 wow fadeInUp">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/assets/img/projects/project-11.jpg"
                    alt="project-preview"
                  />
                  <div className="item-overlay"></div>
                </div>
                <div className="project-link ico-35 color--white">
                  <a
                    className="image-link"
                    href="assets/img/projects/project-11.jpg"
                    title=""
                  >
                    <span className="flaticon-visibility"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-30">
              <div className="project-image project-preview top-img r-10 wow fadeInUp">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/assets/img/projects/project-10a.jpg"
                    alt="project-preview"
                  />
                  <div className="item-overlay"></div>
                </div>
                <div className="project-link ico-35 color--white">
                  <a
                    className="image-link"
                    href="assets/img/projects/project-10a.jpg"
                    title=""
                  >
                    <span className="flaticon-visibility"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-30">
              <div className="project-image project-preview top-img r-10 wow fadeInUp">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/assets/img/projects/project-13.jpg"
                    alt="project-preview"
                  />
                  <div className="item-overlay"></div>
                </div>
                <div className="project-link ico-35 color--white">
                  <a
                    className="image-link"
                    href="assets/img/projects/project-13.jpg"
                    title=""
                  >
                    <span className="flaticon-visibility"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-30">
              <div className="project-image project-preview r-10 wow fadeInUp">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/assets/img/projects/project-15.jpg"
                    alt="project-preview"
                  />
                  <div className="item-overlay"></div>
                </div>
                <div className="project-link ico-35 color--white">
                  <a
                    className="image-link"
                    href="assets/img/projects/project-15.jpg"
                    title=""
                  >
                    <span className="flaticon-visibility"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-30">
              <div className="project-image project-preview top-img r-10 wow fadeInUp">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/assets/img/projects/project-17.jpg"
                    alt="project-preview"
                  />
                  <div className="item-overlay"></div>
                </div>
                <div className="project-link ico-35 color--white">
                  <a
                    className="image-link"
                    href="assets/img/projects/project-17.jpg"
                    title=""
                  >
                    <span className="flaticon-visibility"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-30">
              <div className="project-image project-preview r-10 wow fadeInUp">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/assets/img/projects/project-14.jpg"
                    alt="project-preview"
                  />
                  <div className="item-overlay"></div>
                </div>
                <div className="project-link ico-35 color--white">
                  <a
                    className="image-link"
                    href="assets/img/projects/project-14.jpg"
                    title=""
                  >
                    <span className="flaticon-visibility"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-30">
              <div className="project-image project-preview top-img r-10 wow fadeInUp">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/assets/img/projects/project-16.jpg"
                    alt="project-preview"
                  />
                  <div className="item-overlay"></div>
                </div>
                <div className="project-link ico-35 color--white">
                  <a
                    className="image-link"
                    href="assets/img/projects/project-16.jpg"
                    title=""
                  >
                    <span className="flaticon-visibility"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-inner-img mt-30">
              <div className="project-image project-preview r-10 wow fadeInUp">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/assets/img/projects/project-08.jpg"
                    alt="project-preview"
                  />
                  <div className="item-overlay"></div>
                </div>
                <div className="project-link ico-35 color--white">
                  <a
                    className="image-link"
                    href="assets/img/projects/project-08.jpg"
                    title=""
                  >
                    <span className="flaticon-visibility"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
