import Link from 'next/link'
import React from 'react'

const Dataprotection = () => {
  return (
    <div>
      

      <section className="banner" 
    //   style="background-image:url(assets/img/banner6.jpg)"

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
                    <h3>Data Protection</h3>
                    <ul className="breadcrumb">
                        <li><Link href="index.php">Start</Link></li>
                        <li>Data Protection</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


    </div>
  )
}

export default Dataprotection
