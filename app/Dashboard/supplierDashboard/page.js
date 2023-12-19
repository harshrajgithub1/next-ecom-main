"use client"
import React from 'react'
import Link from 'next/link';



const supplierDashboard = () => {
  return (
    <div>
      <section className="banner"  style={{ backgroundImage: 'url(assets/img/banner6.jpg)' }}>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="banner-caption">
                    <h3>My Account</h3>
                    <ul className="breadcrumb">
                            <li><Link href="/">Start</Link></li>
                            <li>My Account</li>
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
                    <p>SUPPLIERS</p>
                </div>
                <ul className="dashboard_menu">
                    <li><a href="my-account.php">My Profile</a></li>
                    <li><a className="active" href="appointment.php">Appointment</a></li>

                    <li><a className="" href="th.php">Transaction History</a></li>
                    <li><a className="" href="mh.php">Meeting History</a></li>
                    <li><a className="" href="um.php">Upcoming Meeting</a></li>
                    <li><a className="" href="login.php">Logout</a></li>
                </ul>
            </div>
            <div className="col-xl-9 col-lg-8">
                <div className="dashboard_content">
                    <h5>Appointment History</h5>
                    <div className="appointment_history">
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th className="sn">SN</th>
                                        <th className="name">Doctor</th>
                                        <th className="date">Date</th>
                                        <th className="chamber">Chamber</th>
                                        <th className="status">Status</th>
                                        <th className="edit">Action</th>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>1</p>
                                        </td>
                                        <td className="name">
                                            <p>Dr. Samuel Bro</p><span>Dental</span>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="chamber">
                                            <p>12/3 Mirpur Dhaka Bangladesh</p>
                                        </td>
                                        <td className="status"><button>Complete</button></td>
                                        <td className="edit"><a href="className">Edit</a></td>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>2</p>
                                        </td>
                                        <td className="name">
                                            <p>Dr. Samuel Bro</p><span>Dental</span>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="chamber">
                                            <p>12/3 Mirpur Dhaka Bangladesh</p>
                                        </td>
                                        <td className="status"><button className="pending_btn">Pending</button></td>
                                        <td className="edit"><a href="className">Edit</a></td>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>3</p>
                                        </td>
                                        <td className="name">
                                            <p>Dr. Samuel Bro</p><span>Dental</span>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="chamber">
                                            <p>12/3 Mirpur Dhaka Bangladesh</p>
                                        </td>
                                        <td className="status"><button>Complete</button></td>
                                        <td className="edit"><a href="className">Edit</a></td>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>4</p>
                                        </td>
                                        <td className="name">
                                            <p>Dr. Samuel Bro</p><span>Dental</span>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="chamber">
                                            <p>12/3 Mirpur Dhaka Bangladesh</p>
                                        </td>
                                        <td className="status"><button className="pending_btn">Pending</button></td>
                                        <td className="edit"><a href="className">Edit</a></td>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>5</p>
                                        </td>
                                        <td className="name">
                                            <p>Dr. Samuel Bro</p><span>Dental</span>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="chamber">
                                            <p>12/3 Mirpur Dhaka Bangladesh</p>
                                        </td>
                                        <td className="status"><button>Complete</button></td>
                                        <td className="edit"><a href="className">Edit</a></td>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>6</p>
                                        </td>
                                        <td className="name">
                                            <p>Dr. Samuel Bro</p><span>Dental</span>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="chamber">
                                            <p>12/3 Mirpur Dhaka Bangladesh</p>
                                        </td>
                                        <td className="status"><button className="pending_btn">Pending</button></td>
                                        <td className="edit"><a href="className">Edit</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className="row mt-5">
                        <div className="col-12">
                            <div id="pagination">
                                <nav aria-label="...">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="className"><i className="jki jki-arrow-left-light"></i></a></li>
                                        <li className="page-item"><a className="page-link active" href="className">01</a></li>
                                        <li className="page-item"><a className="page-link" href="className">02</a></li>
                                        <li className="page-item"><a className="page-link" href="className">03</a></li>
                                        <li className="page-item"><a className="page-link" href="className"><i className="jki jki-arrow-right-light"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
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

export default supplierDashboard
