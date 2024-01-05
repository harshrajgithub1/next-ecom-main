import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
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
            <h3>ADD PRODUCT</h3>
            <ul className="breadcrumb">
              <li><Link href="/">Start</Link></li>
              <li>ADD PRODUCT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    </section>

    <section className="dashboard content-inner inner-page-hero mb-5">
    <div className="container">
        <div className="row">
            <div className="col-xl-3 col-lg-4">
                <div className="user_profile">
                    <div className="user_profile_img">
                    <img src="assets/img/comment-author-2.jpg" alt="user"
                            className=" img-fluid w-100"/><label for="profile_photo"><i
                                className="jki jki-camera-solid"></i></label>
                                <input id="profile_photo" type="file"
                            className="d-none"/>
                    </div>
                    <h4>User Name</h4>
                    <p>User Id : 23</p>
                </div>
                <ul className="dashboard_menu">
                <li><Link href="profile">My Profile</Link></li>
                <li><Link href="notification">NOTIFICATION</Link></li>
                <li><Link href="addProduct">ADD PRODUCTS</Link></li>
                <li><Link href="csv">CSV</Link></li>
             
                <li><Link href="logout">Logout</Link></li>
                </ul>
            </div>
            
           
        </div>
    </div>
</section>
</>
  )
}

export default page
