'use client'

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios';
import { apiUrl } from '@/app/constant/constant';
import { useForm } from 'react-hook-form';

const Edit = () => {

    let editData='';
  
    const { register, handleSubmit, setValue } = useForm();
  
   useEffect(() => {
    const fetchData = async () => {
        const session =  JSON.parse(sessionStorage.getItem('token'));
        let token = '';
        if(session !=null){
          token = session.access_token ;
        } 

        //console.log(token)
      try {
        const response = await axios.get(`${apiUrl}api/userprofile`, {
          headers: {
            Authorization: 'Bearer '+ token
       
          }, 
        });
        console.log(response.data)
        //setEditData(response.data); // Assuming the API response contains user data
        editData=response.data;
        if (editData) {
          // Loop through the properties of editData.user and set them as default values
          Object.keys(editData.user).forEach((key) => {
            setValue(key, editData.user[key]);
          });
        }
        
       } catch (error) {
          console.error('Error fetching user data:', error);
         }
    };  


    fetchData();
  }, [editData, setValue]); // Empty dependency array ensures that the effect runs only once when the component mounts

  console.log(editData);
  const handleInputChange = (name, value) => {
    // You can use setValue to dynamically update the form values
    setValue(name, value);
  };

  


  const onSubmit = async (formData) => {
    //event.preventDefault();
    console.log(formData);

    try {
      const session = JSON.parse(sessionStorage.getItem('token'));
      let token = '';
      if (session != null) {
        token = session.access_token;
      }

      const res = await axios.post(`${apiUrl}api/update/userprofile`, formData, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });

      console.log(res)
      console.log(res.data); // Assuming res.data contains the response data you want to log.
      // Handle the response data here.
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }

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
            <h3>Edit User Profile</h3>
            <ul className="breadcrumb">
              <li><Link href="/">Start</Link></li>
              <li>Edit User Profile</li>
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
                <li><Link href="logout">Logout</Link></li>
                </ul>
            </div>

            <div className='col'>
            <div className="dashboard_content dashboard_profile">
            <div className='d-flex justify-content-between'>
            <div>
            <h5>Edit Profile info</h5>
            </div>
            <div>
            <Link  className='edit-user' href="/Dashboard/user/profile">Cancel</Link>
            </div>
            </div>

            {/*editData && ( */}
             <form className="mb-5" method="post" onSubmit={handleSubmit(onSubmit)}>
                
                <div className="row">
                <div className="col-lg-6">
                  <div className="dashboard_profile_form">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Addition"
                      
                      {...register('name')}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="dashboard_profile_form">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+880-161568-59689 "
                      {...register('contact_no')}
                      
                      onChange={(e) => handleInputChange('contact_no', e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="dashboard_profile_form">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company@gmail.com"
                      
                      {...register('email')}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>Pin Code</label>
                            <input type="text" className='form-control' placeholder="66" {...register('pincode')} onChange={(e) => handleInputChange('pincode', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>City</label>
                            <input type="text" className='form-control' placeholder="male"  {...register('city')} onChange={(e) => handleInputChange('city', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>State</label>
                            <input type="text" className='form-control' placeholder="35" {...register('state')} onChange={(e) => handleInputChange('state', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>Country</label>
                            <input type="text" className='form-control' placeholder="35"  {...register('country')} onChange={(e) => handleInputChange('country', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dashboard_profile_form">
                            <label>Address</label>
                            <input type="text" className='form-control' placeholder="12/3 Mirpur Dhaka Bangladesh"  {...register('address')} onChange={(e) => handleInputChange('address', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <button  type="submit" className="btn btn-primary  btn--theme common_btn">Save Change</button>
                    </div>
                </div>
             </form>
           {/*} )*/}
        </div>
            
           
        </div>
    </div>

    </div>
</section>


</>
  )

}

export default Edit
