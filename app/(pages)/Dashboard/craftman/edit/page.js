import React from 'react'
import Link from 'next/link'

const Edit = () => {
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
            <h3>Edit Craftman Profile</h3>
            <ul className="breadcrumb">
              <li><Link href="/">Start</Link></li>
              <li>Edit Craftman Profile</li>
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

            <div className='col'>
            <div className="dashboard_content dashboard_profile">
            <div className='d-flex justify-content-between'>
            <h5>Edit Profile info</h5>
            <div>
            <Link className='edit-admin' href="/Dashboard/craftman/profile">Cancel</Link>
            </div></div>
            <form className="mb-5">
                
                <div className="row">
                    <div className="col-lg-6">
                        <div className="dashboard_profile_form">
                            <label>Fast Name</label>
                            <input type="text" className='form-control' placeholder="Addition" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>last Name</label>
                            <input type="text" className='form-control' placeholder="Smith" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>phone</label>
                            <input type="text" className='form-control' placeholder="+880-161568-59689 " />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>email</label>
                            <input type="text" className='form-control' placeholder="Company@gmail.com" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>Weight</label>
                            <input type="text" className='form-control' placeholder="66" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>Gender</label>
                            <input type="text" className='form-control' placeholder="male" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>Age</label>
                            <input type="text" className='form-control' placeholder="35" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dashboard_profile_form">
                            <label>Address</label>
                            <input type="text" className='form-control' placeholder="12/3 Mirpur Dhaka Bangladesh" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <button className="common_btn">Save Change</button>
                    </div>
                </div>
            </form>
            <h5>Change password</h5>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="dashboard_profile_form">
                            <label>old Password</label>
                            <input type="text" className='form-control' placeholder="Old Password" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="dashboard_profile_form">
                            <label>new Password</label>
                            <input type="text" className='form-control' placeholder="New Password" />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="dashboard_profile_form">
                            <label>Change Password</label>
                            <input type="text" className='form-control' placeholder="ChangePassword" />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <button className="common_btn">Save Change</button>
                    </div>
                </div>
            </form>
        </div>
            
           
        </div>
    </div>

    </div>
</section>


</>
  )
}

export default Edit
