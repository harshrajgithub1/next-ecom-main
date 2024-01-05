import React from 'react';
import Link from 'next/link';

const Profile = () => {
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
                <h3>Craftsman/Planner Profile</h3>
                <ul className="breadcrumb">
                  <li><Link href="/">Start</Link></li>
                  <li>Craftsman/Planner Profile</li>
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
                  <img
                    src="/assets/img/comment-author-2.jpg"
                    alt="user"
                    className="img-fluid w-100"
                  />
                  <label htmlFor="profile_photo">
                    <i className="jki jki-camera-solid"></i>
                  </label>
                  <input id="profile_photo" type="file" className="d-none" />
                </div>
                <h4>User Name</h4>
                
              </div>
              <ul className="dashboard_menu">
                    <li><Link href="profile">My Profile</Link></li>
                    <li><Link href="notification">NOTIFICATION</Link></li>

                    <li><Link href="addProduct">ADD PRODUCTS</Link></li>
                    <li><Link href="csv">CSV</Link></li>
                    <li><Link href="subscription">SUBSCRIPTION</Link></li>
                    <li><Link href="logout">Logout</Link></li>

                    <li><Link href="submit">Submit Quotes</Link></li>
              </ul>
            </div>
             

             
            <div className="col-xl-9 col-lg-8">
            <div className="dashboard_content">
            <div className='d-flex justify-content-between'>
            <div>
              <h5>Overview</h5>
              </div>
              <div>
              <Link className='edit-admin' href="edit">Edit</Link> 
              </div>
              </div>
            </div>
            
            <div className="dashboard_profile">
            
              <ul>
               
                <li><span>Name:</span> Harsh raj</li>
                <li><span>Phone:</span>78442***** </li>
               
                <li><span>Gender:</span> Male</li>
                <li><span>Address:</span> Sector-8 Noida</li>
                <li><span>City:</span>Noida </li>
                <li><span>State:</span>UP </li>
                
              </ul>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Profile;
