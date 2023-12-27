"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from 'axios';
import { useState, useEffect } from "react";
// import { redirect } from 'next/navigation';
//import { useSession } from "next-auth/react";
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required").min(8) .max(18),  
  name: Yup.string().matches(/^[a-zA-Z ]+$/, 'Name must contain only letters and spaces').required("Name is required"),
  country:Yup.string().required("Country is required"),
  state:Yup.string().required("state is required"),
  city:Yup.string().required("city is required"),
  address:Yup.string().required("address is required"),
  pincode:Yup.string().required("pincode is required"),
  contact_no: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required("Phone is required"),
  user_type:Yup.string().required("User Role is required"),
});

const formOptions = { resolver: yupResolver(validationSchema) };


// http://165.232.130.162/spanisch_lernen/public/api/signup
const Registration = () => {
  const { t } = useTranslation();

  
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { register,trigger, handleSubmit, formState: { errors } } = useForm(formOptions);

  const onSubmit1 = async (formData, event) => {

    event.preventDefault();
    console.log(formData);
    const isSuccess = true;
    try {
      const res = await axios.post('http://45.79.185.26/trifusa/public/api/register', formData);
      console.log(res.data); // Assuming res.data contains the response data you want to log.
      // Handle the response data here.
      if (res.data.success) {
        toast.success(res.data.message);
        //redirect('/login');
        window.location.href='/login';
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error('An error occurred');
      // Handle the error here.
    }
    // Backend API Call operation is handled here.
  };
    
  const changeRole = async (value) => {
    console.log(value);
    
    // do something with my select value onChange
    await trigger(['user_type']) // Trigger validation on select
  };

  return (
    <div>
      <section
        className="banner"
        // style="background-image:url(assets/img/banner1.jpg)"

        style={{
        backgroundImage: `url(/assets/img/banner1.jpg)`,
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
                <h3>{t('Register')}</h3>

                <ul className="breadcrumb">
                  <li>
                    <Link href="/">{t('Start')}</Link>
                  </li>
                  <li>{t('Register')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="signup" className="bg--scroll login-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="register-page-wrapper r-16 bg--fixed">
                <div className="row">
                  <div className="col-md-6">
                    <div className="register-page-form">
                      <form name="signupform" method="post" onSubmit={handleSubmit(onSubmit1)} className="row sign-up-form">
                      <div className="col-md-12">
                          <p className="p-sm input-header">Login for</p>
                          <select {...register("user_type")}
          onChange={(e) => changeRole(e.target.value)} name="user_type" id="user_type" className="form-control login">
                            <option value="3">Handwerker</option>
            <option value="2">Lieferanten</option>
            <option value="4">Privat</option>
                          </select>
                       
                          {/* <select name="user_type" id="" className="form-control login">
                            <option value="3">Handwerker</option>
                            <option value="2">Lieferanten</option>
                            <option value="4">Privat </option>
                          </select> */}
                        </div>
                       
                        <div className="col-md-12">
                          <p className="p-sm input-header">{t('full name')}</p>
                          <input
                          {...register("name")}
                          className="form-control name"
                            type="text"
                            name="name"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">{t('Email address')}</p>
                          <input
                          {...register("email")}
                          className="form-control email"
                            type="email"
                            name="email"
                            placeholder="example@example.com"
                          />
                        </div>
                        
                        <div className="col-md-12">
                          <p className="p-sm input-header">{t('Password')}</p>
                          <div className="wrap-input">
                            <span className="btn-show-pass ico-20">
                              <span className="flaticon-visibility eye-pass" onClick={handleTogglePassword} style={{cursor:'pointer'}}></span>
                            </span>
                            <input
                          {...register("password")}
                          className="form-control password"
                              type={showPassword ? 'text' : 'password'}
                              name="password"
                              placeholder="min 8 characters"
                            />
                          </div>

                          <div className="row">
                          <div className="col-md-6">
                            <p className="p-sm input-header">{t('Country')}</p>
                            <input
                            {...register("country")}
                            className="form-control name"
                            type="text"
                            name="country"
                            placeholder="Germany"
                            />
                          </div>

                          <div className="col-md-6">
                            <p className="p-sm input-header">{t('State')}</p>
                            <input
                            {...register("state")}
                            className="form-control name"
                            type="text"
                            name="state"
                            placeholder="Hessen"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="p-sm input-header">{t('City')}</p>
                            <input
                            {...register("city")}
                            className="form-control name"
                            type="text"
                            name="city"
                            placeholder="Wiesbaden"
                            />
                          </div>
                          
                          <div className="col-md-6">
                            <p className="p-sm input-header">{t('Zip Code')}</p>
                            <input
                            {...register("pincode")}
                            className="form-control name"
                            type="number"
                            name="pincode"
                            placeholder="56***"
                            />
                          </div>
                          </div>

                          <div className="col-md-12">
                            <p className="p-sm input-header">{t('Address')}</p>
                            <input
                            {...register("address")}
                            className="form-control name"
                            type="text"
                            name="address"
                            placeholder="Address"
                            />
                          </div>

                          <div className="col-md-12">
                            <p className="p-sm input-header">{t('Contact')}</p>
                            <input
                            {...register("contact_no")}
                            className="form-control name"
                            type="number"
                            name="contact_no"
                            placeholder="99999*****"
                            />
                          </div>

                        </div>
                        <div className="col-md-12">
                          <div className="form-data">
                            <span className="text-body"> 
                            {t('By clicking “Create Account”, you agree to our')}
                              <Link href="terms-condition">{t('Terms')}</Link> {t('and that you have read our')}
                              <Link href="privacy-policy"> {t('Privacy Policy')}</Link>
                            </span>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <button  onClick={handleSubmit(onSubmit1)}
                            type="submit"
                            className="btn btn--theme hover--theme submit"
                          >
                           {t('Create Account')}
                          </button>
                        </div>
                        <div className="col-md-12">
                          <p className="create-account text-body text-center">
                          {t('Already have an account?')}{" "}
                            <Link href="login" className="color--theme">
                            {t('Log in')}
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="register-page-txt color--white">
                      <span className="section-id">Start for free</span>

                      <h2 className="s-48 w-700">Create</h2>
                      <h2 className="s-48 w-700">an account</h2>

                      <p className="p-md mt-25">
                        Integer congue sagittis and velna augue egestas magna
                        suscipit purus aliquam
                      </p>

                      <div className="register-page-copyright">
                        <p className="p-sm">
                          &copy; 2023 Trisfusa. <span>All Rights Reserved</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
