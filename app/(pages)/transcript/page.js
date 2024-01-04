"use client"

import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Transcript = () => {
    const { t } = useTranslation();


  return (
    <div>
      

      <section className="banner" 
    //   style="background-image:url(assets/img/banner1.jpg)"

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
                    <h3>{t('Review')}</h3>

                    <ul className="breadcrumb">
                        <li><Link href="/">{t('Start')}</Link></li>
                        <li>{t('Review')}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="reviews-2" className="gr--whitesmoke inner-page-hero reviews-section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
                <div className="section-title mb-70">
                    <h2 className="s-52">Here’s what our amazing <span>clients are saying</span></h2>
                    <p className="s-21 color--grey">Read what customers think about us</p>
                </div>
            </div>
        </div>
        <div className="reviews-2-wrapper rel">
            <div className="row align-items-center row-cols-1 row-cols-md-2">
                <div className="col">
                    <div id="rw-2-1" className="review-2 bg--white-100 block-shadow r-08">
                        <div className="review-ico ico-65">
                            <span className="flaticon-quote"></span>
                        </div>
                        <div className="review-txt">
                            <p>Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet
                                augue and luctus magna dolor luctus egestas sapien vitae </p>
                            <div className="author-data clearfix">
                                <div className="review-avatar">
                                    <img src="/assets/img/review-author-1.jpg" alt="review-avatar"/>
                                </div>
                                <div className="review-author">
                                    <h6 className="s-18 w-700">Scott Boxer</h6>
                                    <p className="p-sm">@scott_boxer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="rw-2-2" className="review-2 bg--white-100 block-shadow r-08">
                        <div className="review-ico ico-65">
                            <span className="flaticon-quote"></span>
                        </div>
                        <div className="review-txt">
                            <p>At sagittis congue augue and magna ipsum vitae a purus ipsum primis diam a cubilia
                                laoreet augue egestas luctus a donec vitae ultrice ligula magna suscipit lectus gestas
                                augue into cubilia </p>
                            <div className="author-data clearfix">
                                <div className="review-avatar">
                                    <img src="/assets/img/review-author-2.jpg" alt="review-avatar"/>
                                </div>
                                <div className="review-author">
                                    <h6 className="s-18 w-700">Joel Peterson</h6>
                                    <p className="p-sm">Internet Surfer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="rw-2-3" className="review-2 bg--white-100 block-shadow r-08">
                        <div className="review-ico ico-65">
                            <span className="flaticon-quote"></span>
                        </div>
                        <div className="review-txt">
                            <p>An augue cubilia laoreet magna suscipit egestas and ipsum a lectus purus ipsum primis and
                                augue ultrice ligula and egestas a suscipit lectus gestas undo auctor tempus feugiat
                                impedit quaerat </p>
                            <div className="author-data clearfix">
                                <div className="review-avatar">
                                    <img src="/assets/img/review-author-5.jpg" alt="review-avatar"/>
                                </div>
                                <div className="review-author">
                                    <h6 className="s-18 w-700">Jennifer Harper</h6>
                                    <p className="p-sm">App Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="rw-2-4" className="review-2 bg--white-100 block-shadow r-08">
                        <div className="review-ico ico-65">
                            <span className="flaticon-quote"></span>
                        </div>
                        <div className="review-txt">
                            <p>Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna suscipit
                                luctus dolor blandit at purus tempus feugiat impedit </p>
                            <div className="author-data clearfix">
                                <div className="review-avatar">
                                    <img src="/assets/img/review-author-8.jpg" alt="review-avatar"/>
                                </div>
                                <div className="review-author">
                                    <h6 className="s-18 w-700">Evelyn Martinez</h6>
                                    <p className="p-sm">WordPress Consultant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="rw-2-5" className="review-2 bg--white-100 block-shadow r-08">
                        <div className="review-ico ico-65">
                            <span className="flaticon-quote"></span>
                        </div>
                        <div className="review-txt">
                            <p>Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet
                                augue and luctus magna dolor luctus egestas sapien vitae </p>
                            <div className="author-data clearfix">
                                <div className="review-avatar">
                                    <img src="/assets/img/review-author-6.jpg" alt="review-avatar"/>
                                </div>
                                <div className="review-author">
                                    <h6 className="s-18 w-700">Leslie D.</h6>
                                    <p className="p-sm">Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="rw-2-6" className="review-2 bg--white-100 block-shadow r-08">
                        <div className="review-ico ico-65">
                            <span className="flaticon-quote"></span>
                        </div>
                        <div className="review-txt">
                            <p>At sagittis congue augue and magna ipsum vitae a purus ipsum primis diam a cubilia
                                laoreet augue egestas luctus a donec vitae ultrice ligula magna suscipit lectus gestas
                                augue into cubilia </p>
                            <div className="author-data clearfix">
                                <div className="review-avatar">
                                    <img src="/assets/img/review-author-3.jpg" alt="review-avatar"/>
                                </div>
                                <div className="review-author">
                                    <h6 className="s-18 w-700">Marisol19</h6>
                                    <p className="p-sm">@marisol19</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="py-100 page-pagination theme-pagination">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <nav aria-label="Page navigation">
                    <ul className="pagination ico-20 justify-content-center">
                        <li className="page-item disabled">
                            <Link className="page-link" href="#" tabindex="-1">
                                <span className="flaticon-back"></span>
                            </Link>
                        </li>
                        <li className="page-item active" aria-current="page">
                            <Link className="page-link" href="#">1</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" href="#">2</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" href="#">3</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" href="#" aria-label="Next">
                                <span className="flaticon-next"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Transcript
