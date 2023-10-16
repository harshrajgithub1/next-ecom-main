import Link from 'next/link'
import React from 'react'


const blog = () => {
  return (
    <div>
      
      <section className="banner" 
      // style="background-image:url(assets/img/banner5.jpg)"

      style={{
        backgroundImage: `url(/assets/img/banner5.jpg)`,
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
                    <h3>Blog</h3>
                    <ul className="breadcrumb">
                        <li><Link href="/">Start</Link></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="blog-page" className="pb-60 inner-page-hero blog-page-section">
    <div className="container">
        <div className="blog-post wide-post wow fadeInUp">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="blog-post-img">
                        <img className="img-fluid r-16" src="/assets/img/blog/post-11-img.jpg" alt="blog-post-image"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="blog-post-txt"> <span className="post-tag color--blue-400">Social Media</span>
                        <h3 className="s-38 w-700">
                            <Link href="blog-detail">Prep Your Security System For Daylight</Link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                        <div className="blog-post-meta mt-30">
                            <ul className="post-meta-list ico-10">
                                <li>
                                    <p className="w-500">By Trisfusa Team</p>
                                </li>
                                <li className="meta-list-divider">
                                    <p><span className="flaticon-minus"></span></p>
                                </li>
                                <li>
                                    <p>Apr 28, 2023</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="posts-wrapper">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                        <div className="blog-post-img mb-35">
                            <img className="img-fluid r-16" src="/assets/img/blog/post-1-img.jpg" alt="blog-post-image"/>
                        </div>
                        <div className="blog-post-txt">
                            <span className="post-tag color--red-400">Product</span>
                            <h6 className="s-20 w-700">
                                <Link href="blog-detail">The Backbone Of The Connected Home</Link>
                            </h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta aperiam voluptatum
                                necessitatibus deserunt itaque, doloribus fuga corrupti, qui delectus repellendus natus
                                beatae voluptatibus alias unde.</p>
                            <div className="blog-post-meta mt-20">
                                <ul className="post-meta-list ico-10">
                                    <li>
                                        <p className="p-sm w-500">By Trisfusa Team</p>
                                    </li>
                                    <li className="meta-list-divider">
                                        <p><span className="flaticon-minus"></span></p>
                                    </li>
                                    <li>
                                        <p className="p-sm">Apr 23, 2023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                        <div className="blog-post-img mb-35">
                            <img className="img-fluid r-16" src="/assets/img/blog/post-2-img.jpg" alt="blog-post-image"/>
                        </div>
                        <div className="blog-post-txt">
                            <span className="post-tag color--green-400">Community</span>
                            <h6 className="s-20 w-700">
                                <Link href="blog-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                    nihil voluptatibus magni?</Link>
                            </h6>
                            <p>Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum</p>
                            <div className="blog-post-meta mt-20">
                                <ul className="post-meta-list ico-10">
                                    <li>
                                        <p className="p-sm w-500">By Admin</p>
                                    </li>
                                    <li className="meta-list-divider">
                                        <p><span className="flaticon-minus"></span></p>
                                    </li>
                                    <li>
                                        <p className="p-sm">Apr 09, 2023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                        <div className="blog-post-img mb-35">
                            <img className="img-fluid r-16" src="/assets/img/blog/post-3-img.jpg" alt="blog-post-image"/>
                        </div>
                        <div className="blog-post-txt">
                            <span className="post-tag color--violet-400">Product</span>
                            <h6 className="s-20 w-700">
                                <Link href="blog-detail">Cubilia laoreet ipsum augue eget egestas Trisfusa magna</Link>
                            </h6>
                            <p>Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat
                                egets congue ultrice sagittis laoreet
                            </p>
                            <div className="blog-post-meta mt-20">
                                <ul className="post-meta-list ico-10">
                                    <li>
                                        <p className="p-sm w-500">By User</p>
                                    </li>
                                    <li className="meta-list-divider">
                                        <p><span className="flaticon-minus"></span></p>
                                    </li>
                                    <li>
                                        <p className="p-sm">Apr 01, 2023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="posts-category ico-20 wow fadeInUp">
                    <h4 className="s-34 w-700">Latest News <span className="flaticon-next"></span></h4>
                </div>
            </div>
        </div>
        <div className="posts-wrapper">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                        <div className="blog-post-img mb-35">
                            <img className="img-fluid r-16" src="/assets/img/blog/post-4-img.jpg" alt="blog-post-image"/>
                        </div>
                        <div className="blog-post-txt">
                            <span className="post-tag color--pink-400">Tutorials</span>
                            <h6 className="s-20 w-700">
                                <Link href="blog-detail">Phasellus blandit justo undo aliquam vitae molestie
                                    nunc sapien augue justo aliquet
                                </Link>
                            </h6>
                            <p>Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum</p>
                            <div className="blog-post-meta mt-20">
                                <ul className="post-meta-list ico-10">
                                    <li>
                                        <p className="p-sm w-500">By Admin</p>
                                    </li>
                                    <li className="meta-list-divider">
                                        <p><span className="flaticon-minus"></span></p>
                                    </li>
                                    <li>
                                        <p className="p-sm">Mar 20, 2023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                        <div className="blog-post-img mb-35">
                            <img className="img-fluid r-16" src="/assets/img/blog/post-5-img.jpg" alt="blog-post-image"/>
                        </div>
                        <div className="blog-post-txt">
                            <span className="post-tag color--violet-400">Services</span>
                            <h6 className="s-20 w-700">
                                <Link href="blog-detail">Blandit justo phasellus undo aliquam diam molestie
                                    vitae
                                </Link>
                            </h6>
                            <p>Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat
                                egets congue ultrice sagittis laoreet
                            </p>
                            <div className="blog-post-meta mt-20">
                                <ul className="post-meta-list ico-10">
                                    <li>
                                        <p className="p-sm w-500">By Trisfusa Team</p>
                                    </li>
                                    <li className="meta-list-divider">
                                        <p><span className="flaticon-minus"></span></p>
                                    </li>
                                    <li>
                                        <p className="p-sm">Mar 13, 2023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                        <div className="blog-post-img mb-35">
                            <img className="img-fluid r-16" src="/assets/img/blog/post-6-img.jpg" alt="blog-post-image"/>
                        </div>
                        <div className="blog-post-txt">
                            <span className="post-tag color--blue-400">Extensions</span>
                            <h6 className="s-20 w-700">
                                <Link href="blog-detail">Cursus porttitor fusce neque CEO egestas cursus magna
                                    sapien and ipsum suscipit
                                </Link>
                            </h6>
                            <p>Mullam ipsum aliqum vitae and blandit vitae tempor sapien and lipsum donec</p>
                            <div className="blog-post-meta mt-20">
                                <ul className="post-meta-list ico-10">
                                    <li>
                                        <p className="p-sm w-500">By Trisfusa Team</p>
                                    </li>
                                    <li className="meta-list-divider">
                                        <p><span className="flaticon-minus"></span></p>
                                    </li>
                                    <li>
                                        <p className="p-sm">Feb 23, 2023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog-post square-post">
            <div className="row">
                <div className="col">
                    <div className="square-post-wrapper bg--black-400 block-shadow r-16 wow fadeInUp">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 order-last order-md-2">
                                <div className="blog-post-txt color--white">
                                    <span className="post-tag color--pink-400">Video Tutorials</span>
                                    <h4 className="s-34 w-700 mb-20">
                                        <Link href="blog-detail">Lipsum sodales sapien Trisfusa aliquet blandit
                                            augue gravida posuere
                                        </Link>
                                    </h4>
                                    <p>Aliqum mullam blandit vitae and tempor sapien and donec lipsum gravida porta
                                        undo velna dolor libero risus aliquet tempus posuere vitae tempor
                                    </p>
                                    <div className="blog-post-meta mt-30">
                                        <ul className="post-meta-list ico-10">
                                            <li>
                                                <p className="w-500">By Trisfusa Team</p>
                                            </li>
                                            <li className="meta-list-divider">
                                                <p><span className="flaticon-minus"></span></p>
                                            </li>
                                            <li>
                                                <p>Feb 12, 2023</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 order-first order-md-2">
                                <div className="blog-post-img video-preview">
                                    <Link className="video-popup1" href="https://www.youtube.com/embed/SZEflIVnhH8">
                                        <div className="video-btn video-btn-xl bg--pink-400 ico-90">
                                            <div className="video-block-wrapper"><span className="flaticon-play-button"></span>
                                            </div>
                                        </div>
                                    </Link>
                                    <img className="img-fluid" src="/assets/img/blog/post-10-img.jpg" alt="video-preview"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="posts-category ico-20 wow fadeInUp">
                    <h4 className="s-34 w-700">All Stories <span className="flaticon-next"></span></h4>
                </div>
            </div>
        </div>
        <div className="posts-wrapper">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                        <div className="blog-post-img mb-35">
                            <img className="img-fluid r-16" src="/assets/img/blog/post-7-img.jpg" alt="blog-post-image"/>
                        </div>
                        <div className="blog-post-txt">
                            <span className="post-tag color--red-400">Product</span>
                            <h6 className="s-20 w-700">
                                <Link href="blog-detail">Phasellus blandit justo undo aliquam diam vitae
                                    molestie
                                </Link>
                            </h6>
                            <p>Egestas luctus vitae augue and ipsum ultrice quisque in cursus lacus feugiat
                                congue diam ultrice laoreet sagittis
                            </p>
                            <div className="blog-post-meta mt-20">
                                <ul className="post-meta-list ico-10">
                                    <li>
                                        <p className="p-sm w-500">By Trisfusa Team</p>
                                    </li>
                                    <li className="meta-list-divider">
                                        <p><span className="flaticon-minus"></span></p>
                                    </li>
                                    <li>
                                        <p className="p-sm">Feb 02, 2023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                        <div className="blog-post-img mb-35">
                            <img className="img-fluid r-16" src="/assets/img/blog/post-8-img.jpg" alt="blog-post-image"/>
                        </div>
                        <div className="blog-post-txt">
                            <span className="post-tag color--violet-400">Service</span>
                            <h6 className="s-20 w-700">
                                <Link href="blog-detail">Porttitor cursus fusce neque CEO egestas cursus
                                    magna sapien and suscipit ipsum
                                </Link>
                            </h6>
                            <p>Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum</p>
                            <div className="blog-post-meta mt-20">
                                <ul className="post-meta-list ico-10">
                                    <li>
                                        <p className="p-sm w-500">By Admin</p>
                                    </li>
                                    <li className="meta-list-divider">
                                        <p><span className="flaticon-minus"></span></p>
                                    </li>
                                    <li>
                                        <p className="p-sm">Jan 26, 2023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                        <div className="blog-post-img mb-35">
                            <img className="img-fluid r-16" src="/assets/img/blog/post-9-img.jpg" alt="blog-post-image"/>
                        </div>
                        <div className="blog-post-txt">
                            <span className="post-tag color--green-400">Community</span>
                            <h6 className="s-20 w-700">
                                <Link href="blog-detail">Aliqum mullam porta blandit: lacus and sapien
                                    gravida
                                </Link>
                            </h6>
                            <p>Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat
                                egets congue ultrice sagittis laoreet
                            </p>
                            <div className="blog-post-meta mt-20">
                                <ul className="post-meta-list ico-10">
                                    <li>
                                        <p className="p-sm w-500">By Admin</p>
                                    </li>
                                    <li className="meta-list-divider">
                                        <p><span className="flaticon-minus"></span></p>
                                    </li>
                                    <li>
                                        <p className="p-sm">Jan 12, 2023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="pb-100 page-pagination theme-pagination">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <nav aria-label="Page navigation">
                    <ul className="pagination ico-20 justify-content-center">
                        <li className="page-item disabled"><Link className="page-link" href="#" tabindex="-1"><span
                                    className="flaticon-back"></span></Link>
                        </li>
                        <li className="page-item active" aria-current="page"><Link className="page-link" href="#">1</Link></li>
                        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                        <li className="page-item"><Link className="page-link" href="#" aria-label="Next"><span
                                    className="flaticon-next"></span></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default blog
