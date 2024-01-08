'use client'

import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import axios from 'axios';
import { apiUrl } from '@/app/constant/constant';

const Profile = () => {

  const [userData, setUserData] = useState(null);
  
  
  useEffect(() => {
    const fetchData = async () => {
        const session =  JSON.parse(sessionStorage.getItem('token'));
        let token = '';
        if(session !=null){
          token = session.access_token ;
        } 

        console.log(token)
      try {
        const response = await axios.get(`${apiUrl}api/userprofile`, {
          headers: {
            Authorization: 'Bearer '+ token
       
          }, 
        });
        console.log(response)
        setUserData(response.data); // Assuming the API response contains user data
        
        
       } catch (error) {
          console.error('Error fetching user data:', error);
         }
    };  


    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  
 
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
                <h3>User Profile</h3>
                <ul className="breadcrumb">
                  <li><Link href="/">Start</Link></li>
                  <li>User Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </section>


    <section className="dashboard content-inner">
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
             
                <li><Link href="logout">Logout</Link></li>
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
            
            {userData && (
            <div className="dashboard_profile">
            
              <ul>
              <li><span>User Type:</span> {userData.user.usertype.name}</li>
                <li><span>Name:</span> {userData.user.name}</li>
                <li><span>Phone:</span>{userData.user.contact_no} </li>
               
                <li><span>Email:</span> {userData.user.email}</li>
                <li><span>Address:</span> {userData.user.address}</li>
                <li><span>Pin Code:</span> {userData.user.pincode}</li>
                
                <li><span>City:</span>{userData.user.city} </li>
                <li><span>State:</span>{userData.user.state} </li>
                <li><span>Country:</span>{userData.user.country} </li>
                
              </ul>
              
            </div>
            )}
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

export default Profile;
