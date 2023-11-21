import React from 'react'

const page = () => {
    return (
    
        <div>
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
    
         
        </div>
      );
}

export default page
