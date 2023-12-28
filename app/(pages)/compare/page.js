"use client";
import React from "react";

const Compare = () => {
  function requestQuotation() {}
  return (
    <div>
      <section
        className="banner"
        style={{ backgroundImage: "url(assets/img/banner2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>Vergleich</h3>
                <ul className="breadcrumb">
                  <li>
                    <a href="/">Start</a>
                  </li>
                  <li>Vergleich</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparemodal inner-page-hero" id="comparemodal">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="about-2-title mb-60 text-center wow fadeInUp">
                <span className="section-id">Vergleich</span>
                <h2 className="s-52 mb-30">
                  We Have <span>Many Services</span> Currently
                </h2>
                <p className="mb-0 text-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat alias possimus vitae. Eveniet dicta voluptatem
                  voluptatibus soluta vero enim iusto maxime cum corrupti odio
                  nemo sed eaque velit, vitae similique!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* new section implementation  */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="comparemodal-body">
                <div className="table-wrapper table-responsive ratio_asos">
                  <table className="table table-compare">
                    <thead>
                      <tr>
                        <th>PRODUCTS</th>
                        <th>DETAILS</th>
                        <th>PRICE</th>
                        <th>PRODUCT CATEGORIES</th>
                        <th>COMPATIBILITY</th>
                        <th>CONNECTIVITY</th>
                        <th>MANUFACTURER</th>
                        <th>SELF-PROGRAMMING</th>
                        <th>Request Quote</th>
                        <th>DIRECT BUY FROM MANUFACTURER</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-product-details">
                        <td>
                          <div class="product-box">
                            <div class="product-image">
                              <button className="btn-remove">
                                <i class="jki jki-times-solid"></i>
                              </button>
                              <a class="w-100" href="#">
                                <img
                                  src="assets/img/blog/post-1-img.jpg"
                                  class="img-fluid bg-img"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div class="product-details">
                              <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                              ></button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="product-title">
                            <a href="#">
                              <h6 class="truncate">Lighting</h6>
                            </a>
                          </div>
                          <p class="content-color truncate-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Molestias dolorum laboriosam ipsam eaque
                            aliquam quaerat sapiente repellendus explicabo
                            perferendis! Facere reprehenderit aut pariatur
                            recusandae at voluptatibus officiis debitis eius
                            minima.
                          </p>
                          <a class="theme-color" href="product.html">
                            More Details...
                          </a>
                        </td>
                        <td>
                          <span class="font-light">$100.99</span>{" "}
                          <del class="theme-color">$150.00</del>
                        </td>
                        <td> <p>Lighting_Indoor/Outdoor_LED-Bulb_LED-light 300W</p> 
                        </td>
                        <td>(All) iOS, Android, Windows</td>
                        <td>
                          Apple Home, Google Home, All, and Native Apps by
                          manufacturers
                        </td>
                        <td>PAGE INDUSTRIES LIMITED</td>
                        <td>Parametrization by professional</td>
                        <td>
                        <a>
                          <input type="checkbox" id="choose" name="choose" value="Product"/>
                          </a>
                        </td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Buy
                            </button>
                          </a>
                        </td>
                      </tr>
                      <tr className="table-product-details">
                        <td>
                          <div class="product-box">
                            <div class="product-image">
                              <button className="btn-remove">
                                <i class="jki jki-times-solid"></i>
                              </button>
                              <a class="w-100" href="#">
                                <img
                                   src="assets/img/blog/post-2-img.jpg"
                                  class="img-fluid bg-img"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div class="product-details">
                              <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                              ></button>
                            </div>
                          </div>
                        </td>
                        
                        <td>
                          <div class="product-title">

                          <div class="product-details">
                              <div class="product-title">
                                <a href="#">
                                  <h6 class="truncate">Emergency Light</h6>
                                </a>
                              </div>
                              <span class="font-light">$100.99</span>{" "}
                              <del class="theme-color">$150.00</del>
                              <p class="content-color truncate-2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Illum sunt a totam tenetur ad
                                eligendi nisi commodi repellendus architecto?
                                Provident fugit magni ut natus voluptates
                                mollitia sunt quisquam ex veritatis!
                              </p>
                              <a class="theme-color" href="product.html">
                                More Details...
                              </a>

                            </div>
                            </div>
                        </td>


                        <td>
                          <span class="font-light">$100.99</span>{" "}
                          <del class="theme-color">$150.00</del>
                        </td>
                        <td><p>Emergency Light_Out-door_LED-Bulb_LED-light 1000W</p> </td>
                        <td>(All) iOS, Android, Windows</td>
                        <td>
                          Apple Home, Google Home, All, and Native Apps by
                          manufacturers
                        </td>
                        <td>PAGE INDUSTRIES LIMITED</td>
                        <td>Parametrization by professional</td>
                        <td>
                        <a>
                          <input type="checkbox" id="choose" name="choose" value="Product"/>
                          </a>
                        </td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Buy
                            </button>
                          </a>
                        </td>
                      </tr>
                      <tr className="table-product-details">
                        <td>
                          <div class="product-box">
                            <div class="product-image">
                              <button className="btn-remove">
                                <i class="jki jki-times-solid"></i>
                              </button>
                              <a class="w-100" href="#">
                              <img
                                  src="assets/img/blog/post-3-img.jpg"
                                  class="img-fluid bg-img"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div class="product-details">
                              <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                              ></button>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                        <div class="product-title">
                                <a href="#">
                                  <h6 class="truncate">Multimedia</h6>
                                </a>
                              </div>
                              <span class="font-light">$100.99</span>{" "}
                              <del class="theme-color">$150.00</del>
                              <p class="content-color truncate-2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Illum sunt a totam tenetur ad
                                eligendi nisi commodi repellendus architecto?
                                Provident fugit magni ut natus voluptates
                                mollitia sunt quisquam ex veritatis!
                              </p>
                              <a class="theme-color" href="product.html">
                                More Details...
                              </a>
                        </td>

                        <td>
                          <span class="font-light">$100.99</span>{" "}
                          <del class="theme-color">$150.00</del>
                        </td>
                        <td><p>Multimedia_Videos_Podcast_Celebraties-Podcast</p></td>
                        <td>(All) iOS, Android, Windows</td>
                        <td>
                          Apple Home, Google Home, All, and Native Apps by
                          manufacturers
                        </td>
                        <td>PAGE INDUSTRIES LIMITED</td>
                        <td>Parametrization by professional</td>
                        <td>
                        <a>
                          <input type="checkbox" id="choose" name="choose" value="Product"/>
                          </a>
                        </td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Buy
                            </button>
                          </a>
                        </td>
                      </tr>
                      <tr className="table-product-details">
                        <td>
                          <div class="product-box">
                            <div class="product-image">
                              <button className="btn-remove">
                                <i class="jki jki-times-solid"></i>
                              </button>
                              <a class="w-100" href="#">
                              <img
                                  src="assets/img/blog/post-4-img.jpg"
                                  class="img-fluid bg-img"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div class="product-details">
                              <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                              ></button>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                          
                          <div class="product-title">
                                <a href="javascript:void(0)">
                                  <h6 class="truncate">Ventilation</h6>
                                </a>
                              </div>
                              <span class="font-light">$100.99</span>{" "}
                              <del class="theme-color">$150.00</del>
                              <p class="content-color truncate-2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Illum sunt a totam tenetur ad
                                eligendi nisi commodi repellendus architecto?
                                Provident fugit magni ut natus voluptates
                                mollitia sunt quisquam ex veritatis!
                              </p>
                              <a class="theme-color" href="product.html">
                                More Details...
                              </a>
                        </td>

                        <td>
                          <span class="font-light">$100.99</span>{" "}
                          <del class="theme-color">$150.00</del>
                        </td>
                        <td><p>Ventilation_Natural Ventilation_Building_Rooms,Kitchen,Washrooms</p></td>
                        <td>(All) iOS, Android, Windows</td>
                        <td>
                          Apple Home, Google Home, All, and Native Apps by
                          manufacturers
                        </td>
                        <td>PAGE INDUSTRIES LIMITED</td>
                        <td>Parametrization by professional</td>
                        <td>
                          <a>
                          <input type="checkbox" id="choose" name="choose" value="Product"/>
                          </a>
                        </td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Buy
                            </button>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button className="btn btn-success" id="comp-req-btn" onClick={requestQuotation}>Request Quote</button></td>
                    <td></td>
                  </tr>
              
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* new section implementation ends here */}


        {/* <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="comparemodal-body">
                <div className="table-wrapper table-responsive ratio_asos">
                  <table className="table table-compare">
                    <thead>
                      <tr>
                        <th>Action</th>
                        <th class="remove">
                          <button className="btn-remove">
                            <i class="jki jki-trash-solid"></i>
                          </button>
                        </th>
                        <th class="remove">
                          <button className="btn-remove">
                            <i class="jki jki-trash-solid"></i>
                          </button>
                        </th>
                        <th class="remove">
                          <button className="btn-remove">
                            <i class="jki jki-trash-solid"></i>
                          </button>
                        </th>
                        <th class="remove">
                          <button className="btn-remove">
                            <i class="jki jki-trash-solid"></i>
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-product-details">
                        <td>
                          <p> Compare Selected Items vs others </p>
                        </td>
                        <td>
                          <div class="product-box">
                            <div class="product-image">
                              <button className="btn-remove">
                                <i class="jki jki-times-solid"></i>
                              </button>
                              <a class="w-100" href="javascript:void(0)">
                                <img
                                  src="assets/img/blog/post-1-img.jpg"
                                  class="img-fluid bg-img"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div class="product-details">
                              <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                              ></button>
                              <div class="product-title">
                                <a href="javascript:void(0)">
                                  <h6 class="truncate">Lighting</h6>
                                </a>
                              </div>
                              <span class="font-light">$89.99</span>{" "}
                              <del class="theme-color">$100.00</del>
                              <p class="content-color truncate-2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Molestias dolorum laboriosam
                                ipsam eaque aliquam quaerat sapiente repellendus
                                explicabo perferendis! Facere reprehenderit aut
                                pariatur recusandae at voluptatibus officiis
                                debitis eius minima.
                              </p>
                              <a class="theme-color" href="product.html">
                                More Details...
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="product-box">
                            <div class="product-image">
                              <button className="btn-remove">
                                <i class="jki jki-times-solid"></i>
                              </button>
                              <a class="w-100" href="javascript:void(0)">
                                <img
                                  src="assets/img/blog/post-2-img.jpg"
                                  class="img-fluid bg-img"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div class="product-details">
                              <div class="product-title">
                                <a href="javascript:void(0)">
                                  <h6 class="truncate">Emergency Light</h6>
                                </a>
                              </div>
                              <span class="font-light">$100.99</span>{" "}
                              <del class="theme-color">$150.00</del>
                              <p class="content-color truncate-2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Illum sunt a totam tenetur ad
                                eligendi nisi commodi repellendus architecto?
                                Provident fugit magni ut natus voluptates
                                mollitia sunt quisquam ex veritatis!
                              </p>
                              <a class="theme-color" href="product.html">
                                More Details...
                              </a>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="product-box">
                            <div class="product-image">
                              <button className="btn-remove">
                                <i class="jki jki-times-solid"></i>
                              </button>
                              <a class="w-100" href="javascript:void(0)">
                                <img
                                  src="assets/img/blog/post-3-img.jpg"
                                  class="img-fluid bg-img"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div class="product-details">
                              <div class="product-title">
                                <a href="javascript:void(0)">
                                  <h6 class="truncate">Multimedia</h6>
                                </a>
                              </div>
                              <span class="font-light">$100.99</span>{" "}
                              <del class="theme-color">$150.00</del>
                              <p class="content-color truncate-2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Illum sunt a totam tenetur ad
                                eligendi nisi commodi repellendus architecto?
                                Provident fugit magni ut natus voluptates
                                mollitia sunt quisquam ex veritatis!
                              </p>
                              <a class="theme-color" href="product.html">
                                More Details...
                              </a>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="product-box">
                            <div class="product-image">
                              <button className="btn-remove">
                                <i class="jki jki-times-solid"></i>
                              </button>
                              <a class="w-100" href="javascript:void(0)">
                                <img
                                  src="assets/img/blog/post-4-img.jpg"
                                  class="img-fluid bg-img"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div class="product-details">
                              <div class="product-title">
                                <a href="javascript:void(0)">
                                  <h6 class="truncate">Ventilation</h6>
                                </a>
                              </div>
                              <span class="font-light">$100.99</span>{" "}
                              <del class="theme-color">$150.00</del>
                              <p class="content-color truncate-2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Illum sunt a totam tenetur ad
                                eligendi nisi commodi repellendus architecto?
                                Provident fugit magni ut natus voluptates
                                mollitia sunt quisquam ex veritatis!
                              </p>
                              <a class="theme-color" href="product.html">
                                More Details...
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <th>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </th>
                        <th>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </th>
                        <th>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </th>
                        <th>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </th>
                      </tr>

                      <tr>
                        <td>Price</td>
                        <td>Affordable</td>
                        <td>
                          Expensive to adjust selections according to budget
                        </td>
                        <td>Mid-range</td>
                        <td>Affordable</td>
                      </tr>

                      <tr>
                        <td>PRODUCT CATEGORIES</td>
                        <td>Lighting</td>
                        <td>Ventilation</td>
                        <td>Heating</td>
                        <td>Air Conditioning</td>
                      </tr>

                      <tr>
                        <td>Compatibility</td>
                        <td>(All) iOS, Android, Windows</td>
                        <td>(All) iOS, Android, Windows</td>
                        <td>(All) iOS, Android, Windows</td>
                        <td>(All) iOS, Android, Windows</td>
                      </tr>

                      <tr>
                        <td>Connectivity</td>
                        <td>
                          Apple Home, Google Home, All, and Native Apps by
                          manufacturers
                        </td>
                        <td>
                          Apple Home, Google Home, All, and Native Apps by
                          manufacturers
                        </td>
                        <td>
                          Apple Home, Google Home, All, and Native Apps by
                          manufacturers
                        </td>
                        <td>
                          Apple Home, Google Home, All, and Native Apps by
                          manufacturers
                        </td>
                      </tr>

                      <tr>
                        <td>Manufacturer</td>
                        <td>PAGE INDUSTRIES LIMITED</td>
                        <td>PAGE INDUSTRIES LIMITED</td>
                        <td>Serenata Lifestyle Pvt. Ltd.</td>
                        <td>Serenata Lifestyle Pvt. Ltd.</td>
                      </tr>

                      <tr>
                        <td>Self-Programming:</td>
                        <td>Parametrization by professional</td>
                        <td>Programming</td>
                        <td>Parametrization by professional</td>
                        <td>Programming</td>
                      </tr>

                      <tr>
                        <td>Request for quotation</td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Request
                            </button>
                          </a>
                        </td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Request
                            </button>
                          </a>
                        </td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Request
                            </button>
                          </a>
                        </td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Request
                            </button>
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>Direct Buy from Manufacturer</td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Buy
                            </button>
                          </a>
                        </td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Buy
                            </button>
                          </a>
                        </td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Buy
                            </button>
                          </a>
                        </td>
                        <td>
                          <a>
                            <button
                              className="btn btn-success btn-full"
                              onClick={requestQuotation}
                            >
                              Buy
                            </button>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Compare;
