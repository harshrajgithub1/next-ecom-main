import React from 'react';
import Link from 'next/link';

const  Profile = () => {
  return (
    <div>
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
                <h3>Electrician Dashboard</h3>
                <ul className="breadcrumb">
                  <li><Link href="/">Start</Link></li>
                  <li>Electrician Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard content-inner inner-page-hero mb-5">
      <div>
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
                <p>User Id: 23</p>
              </div>
              <ul className="dashboard_menu">
                <li><a href="my profile">My Profile</a></li>
                <li><a className="active" href="notification">NOTIFICATION</a></li>
                <li><a className="" href="add products">ADD PRODUCTS</a></li>
                <li><a className="" href="csv">CSV</a></li>
                <li><a className="" href="subscription">SUBSCRIPTION</a></li>
                <li><a className="" href="logout">Logout</a></li>
              </ul>
            </div>

            <div className="dashboard_profile">
              <h5>Profile information</h5>
              <a href="/my-account/profile">edit</a>
              <ul>
                <li>
                  <span>ID:</span> 31
                </li>
                <li><span>Name:</span> harsh raj</li>
                <li><span>Phone:</span> </li>
                <li><span>Email:</span> harsh@abc.com</li>
                <li><span>Gender:</span> Male</li>
                <li><span>Address:</span> </li>
                <li><span>City:</span> </li>
                <li><span>State:</span> </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
