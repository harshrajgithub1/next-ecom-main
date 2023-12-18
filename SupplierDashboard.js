// 'use client'
// import React, { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import Link from 'next/link';
// import FetchData from '@/app/components/FetchData';

// const SupplierDashboard = () => {

//     return (
//         <div className="dashboard_content">
//             <h5>Supplier Dashboard</h5>

//             <div className="row">
//                 <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
//                     <div className="dashboard_overview">
//                         <div className="icon"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
//                         <div className="text">
//                             <p>Notification</p>
//                             <h3>{data.id}</h3>
//                         </div>
//                     </div>
//                 </div>
             
//             </div>

//             <div className="dashboard_profile">
//                 <h5>Supplier Profile information</h5>
//                 <Link href="/my-account/profile">edit</Link>
//                 <ul>
//                     <li><span>ID:</span> {data.id}</li>
//                     <li><span>Name:</span> {data.first_name} {data.last_name}</li>
//                     <li><span>Phone:</span> {data.phone_no} </li>
//                     <li><span>Email:</span> {data.email}</li>
//                     <li><span>Gender:</span> {data.gender}</li>
//                     <li><span>Adress:</span> {data.address}</li>
//                     <li><span>City:</span> {data.city}</li>
//                     <li><span>State:</span> {data.state}</li>
//                     <li><span>Age:</span> </li>
//                     <li><span>Blood Group:</span> </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default MyAccount