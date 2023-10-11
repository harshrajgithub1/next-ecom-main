import Link from 'next/link'
import React from 'react'

const LegalNotice = () => {
  return (
    <div>
      
      <section className="banner" 
    //   style="background-image:url(assets/img/banner6.jpg)"
    >
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="banner-caption">
                    <h3>Legal Notice</h3>
                    <ul className="breadcrumb">
                        <li><Link href="/">Start</Link></li>
                        <li>Legal Notice</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default LegalNotice
