"use client"
import React from 'react'
import Link from 'next/link';



const electrianDashboard = () => {
  return (
    <div>
     <section className="banner" 
        //   style="background-image:url(assets/img/banner3.jpg)"
    
          style={{
            backgroundImage: `url(/assets/img/banner3.jpg)`,
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
                    <h3>Craftsman/Planner Dashboard</h3>
                    <ul className="breadcrumb">
                            <li><Link href="/">Start</Link></li>
                            <li>Craftsman/Planner Dashboard</li>
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
                
                <li><a href="my profile">My Profile</a></li>
                    <li><a className="active" href="notification">NOTIFICATION</a></li>

                    <li><a className="" href="add products">ADD PRODUCTS</a></li>
                    <li><a className="" href="csv">CSV</a></li>
                    <li><a className="" href="subscription">SUBSCRIPTION</a></li>
                    <li><a className="" href="submit">Submit Quotes</a></li>
                </ul>
            </div>
            <div className="col-xl-9 col-lg-8">
                <div className="dashboard_content">
                    <h5>My Account</h5>
                    <div className="appointment_history">
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th className="sn">SN</th>
                                        <th className="name">Customer Name</th>
                                        <th className="date">Date</th>
                                        <th className="user">User-House/Apart..</th>
                                        <th className="industrie">Industrial Area</th>
                                        <th className="rented">Rented-Houses/Apart..</th>
                                        <th className="enquires">Customer Enquires</th>
                                        {/* <th className="edit">Adjust quotes</th> */}
                                        <th className="status">Quote Status</th>
                                        <th className="location">Customer Location</th>
                                        <th className="submit">Submit within 48hrs</th>
                                        <th className="view">View All</th>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>1</p>
                                        </td>
                                        <td className="name">
                                            <p>Frank-Walter Steinmeier</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="user">
                                            <p>Yes</p>
                                        </td>
                                        <td className="industrie">
                                            <p>N/A</p>
                                        </td>
                                        <td className="rented">
                                            <p>N/A</p>
                                        </td>
                                        <td className="enquires">
                                            <p>12/3 Mirpur Dhaka Bangladesh....</p>
                                        </td>
                                        {/* <td className="edit"><a href="className">Edit</a></td> */}
                                        <td className="status"><button className="pending_btn">Pending</button></td>
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                        <td className="submit"><button type="button" className="btn btn-success succ" >Success</button></td>
                                        <td className="view"><button type="button" className="btn btn-info">Info</button></td>
                                        
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>2</p>
                                        </td>
                                        <td className="name">
                                            <p>Alain Berset</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="user">
                                            <p>N/A</p>
                                        </td>
                                        <td className="industrie">
                                            <p>N/A</p>
                                        </td>
                                        <td className="rented">
                                            <p>Yes</p>
                                        </td>
                                        <td className="enquires">
                                            <p>12/3 Mirpur Dhaka Bangladesh....</p>
                                        </td>
                                        {/* <td className="edit"><a href="className">Edit</a></td> */}
                                        <td className="status"><button className="pending_btn">Pending</button></td>
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                        <td className="submit"><button type="button" className="btn btn-success succ" >Success</button></td>
                                        <td className="view"><button type="button" className="btn btn-info">Info</button></td>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>3</p>
                                        </td>
                                        <td className="name">
                                            <p>Narendra Modi</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="user">
                                            <p>Yes</p>
                                        </td>
                                        <td className="industrie">
                                            <p>N/A</p>
                                        </td>
                                        <td className="rented">
                                            <p>N/A</p>
                                        </td>
                                        <td className="enquires">
                                            <p>12/3 Mirpur Dhaka Bangladesh....</p>
                                        </td>
                                        {/* <td className="edit"><a href="className">Edit</a></td> */}
                                        <td className="status"><button className="pending_btn">Pending</button></td>
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                        <td className="submit"><button type="button" className="btn btn-success succ" >Success</button></td>
                                        <td className="view"><button type="button" className="btn btn-info">Info</button></td>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>4</p>
                                        </td>
                                        <td className="name">
                                            <p>Nilesh Kumar</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="user">
                                            <p>N/A</p>
                                        </td>
                                        <td className="industrie">
                                            <p>Yes</p>
                                        </td>
                                        <td className="rented">
                                            <p>N/A</p>
                                        </td>
                                        <td className="enquires">
                                            <p>12/3 Mirpur Dhaka Bangladesh....</p>
                                        </td>
                                        {/* <td className="edit"><a href="className">Edit</a></td> */}
                                        <td className="status"><button className="pending_btn">Pending</button></td>
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                        <td className="submit"><button type="button" className="btn btn-success succ" >Success</button></td>
                                        <td className="view"><button type="button" className="btn btn-info">Info</button></td>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>5</p>
                                        </td>
                                        <td className="name">
                                            <p>Alia Bhatt</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="user">
                                            <p>N/A</p>
                                        </td>
                                        <td className="industrie">
                                            <p>Yes</p>
                                        </td>
                                        <td className="rented">
                                            <p>N/A</p>
                                        </td>
                                        <td className="enquires">
                                            <p>12/3 Mirpur Dhaka Bangladesh....</p>
                                        </td>
                                        {/* <td className="edit"><a href="className">Edit</a></td> */}
                                        <td className="status"><button className="pending_btn">Pending</button></td>
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                        <td className="submit"><button type="button" className="btn btn-success succ" >Success</button></td>
                                        <td className="view"><button type="button" className="btn btn-info">Info</button></td>
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>6</p>
                                        </td>
                                        <td className="name">
                                            <p>Salman Khan</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        <td className="user">
                                            <p>N/A</p>
                                        </td>
                                        <td className="industrie">
                                            <p>N/A</p>
                                        </td>
                                        <td className="rented">
                                            <p>Yes</p>
                                        </td>
                                        <td className="enquires">
                                            <p>12/3 Mirpur Dhaka Bangladesh....</p>
                                        </td>
                                        {/* <td className="edit"><a href="className">Edit</a></td> */}
                                        <td className="status"><button className="pending_btn">Pending</button></td>
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                        <td className="submit"><button type="button" className="btn btn-success succ" >Success</button></td>
                                        <td className="view"><button type="button" className="btn btn-info">Info</button></td>
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

export default electrianDashboard
