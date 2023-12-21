import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <section
        className="banner"
        style={{
          backgroundImage: `url(/assets/img/banner3.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '540px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>SUBSCRIPTION</h3>
                <ul className="breadcrumb">
                  <li><Link href="/">Start</Link></li>
                  <li>SUBSCRIPTION</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        </section>
    
  )
}

export default page
