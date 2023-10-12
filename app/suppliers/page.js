import Link from 'next/link'
import React from 'react'

const Suppliers = () => {
  return (
    <div>
      

      <section className="banner" 
    //    style="background-image:url(assets/img/banner4.jpg)"

    style={{
        backgroundImage: `url(/assets/img/banner4.jpg)`,
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
                    <h3>Liferent</h3>

                    <ul className="breadcrumb">
                        <li><Link href="/">Start</Link></li>
                        <li>Liferent</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="about-2" className="rel inner-page-hero about-section division">

    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="liferent">
                    <div className="row">
                        <div className="col-md-6 first-child">
                            <div className="vergleich wow fadeInUp">
                                <div className="img-style">
                                    <img src="/assets/img/projects/img1.jpg" alt="" className="img-fluid"/>
                                </div>
                                <div className="content-style">
                                    <h3>Horizon Villa</h3>
                                    <p>Smart Villa</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="vergleich wow fadeInUp">
                                <div className="img-style">
                                    <img src="/assets/img/projects/img2.jpg" alt="" className="img-fluid"/>
                                </div>
                                <div className="content-style">
                                    <h3>Cubic Rome</h3>
                                    <p>Smart Museum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-5">
                <div className="txt-block right-column wow fadeInLeft">
                    <span className="section-id">About Trisfusa</span>
                    <div className="section-title text-start">
                        <h2 className="s-46">We Will Provide <span>Convenience</span> In Your Home</h2>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo culpa alias nulla 
                    incidunt animi ullam optio quasi quos delectus hic! Quidem illo eligendi facilis
                     ex repellat vero consequuntur nulla mollitia.</p>

                    <div className="about_liferent">
                        <div className="img-style">
                            <img src="/assets/img/img1.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="content-style">
                            <h3>Smart Device</h3>
                            <p>Lorem ipsum dolor sit amet consect adipiscing elit ligula pretium lacosa
                             consequat.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <div className="liferent-box box-01 wow fadeInUp">
                    <i aria-hidden="true" className="icon jki jki-cast-line"></i>
                    <div className="cctv">
                        <h3>Wirelessly Smart</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt sed do eiusmod.</p>
                        <a href="#">View Details</a>
                        <i aria-hidden="true" className="hover jki jki-cast-line"></i>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="liferent-box box-02 wow fadeInUp">
                    <i aria-hidden="true" className="icon jki jki-Safe-house-light"></i>
                    <div className="cctv">
                        <h3>24x7 Monitoring</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt sed do eiusmod.</p>
                        <a href="#">View Details</a>
                        <i aria-hidden="true" className="hover jki jki-Safe-house-light"></i>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="liferent-box box-03 wow fadeInUp">
                    <i aria-hidden="true" className="icon jki jki-padlock-light"></i>
                    <div className="cctv">
                        <h3>Smart Lock</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt sed  do eiusmod.</p>
                        <a href="#">View Details</a>
                        <i aria-hidden="true" className="hover jki jki-padlock-light"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="about-2" className="rel inner-page-hero about-section division pb-100">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="section-title text-start mb-60">
                    <h2 className="s-52 mb-30">We <span>provide solutions</span> for your creative ideas</h2>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Recusandae placeat voluptatem possimus vitae a voluptas veritatis. Facere magnam 
                    tempore soluta? Incidunt similique corrupti iusto distinctio culpa quisquam saepe
                     libero quasi.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5">
                <div className="text-end">
                    <div className="about-2-img a-2-1 r-12">
                        <img className="img-fluid" src="/assets/img/a2-1.jpg" alt="about-image"/>
                    </div>
                    <div className="about-2-img a-2-2 r-12">
                        <img className="img-fluid" src="/assets/img/a2-2.jpg" alt="about-image"/>
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                <div className="about-2-img a-2-3 r-12">
                    <img className="img-fluid" src="/assets/img/a2-3.jpg" alt="about-image"/>
                </div>
                <div className="row">
                    <div className="col-md-7 col-lg-6">
                        <div className="a2-txt bg--black-400 pattern-01 bg--fixed color--white r-12">
                            <div className="a2-txt-quote ico-40 o-20">
                                <span className="flaticon-quote"></span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                             similique sint soluta  tempore ipsam facilis sequi, autem dolor! Magnam 
                             illo a earum facere dolores doloribus accusamus rem natus ipsum similique.
                            </p>
                            <p className="a2-txt-author">Lorem ipsumr <span>CEO & CO-FOUNDER</span></p>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-6">
                        <div className="about-2-img a-2-4 r-12">
                            <img className="img-fluid" src="/assets/img/a2-4.jpg" alt="about-image"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Suppliers
