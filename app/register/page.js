"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required").min(8),
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required")
});

const formOptions = { resolver: yupResolver(validationSchema) };

// http://165.232.130.162/spanisch_lernen/public/api/signup
const Registration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

  const onSubmit = async (formData, event) => {

    event.preventDefault();
    console.log(formData);
    const isSuccess = true;
    try {
      const res = await axios.post('http://165.232.130.162/Spanisch_lernen/public/api/signup', formData);
      console.log(res.data); // Assuming res.data contains the response data you want to log.
      // Handle the response data here.
      if (isSuccess) {
        toast.success('Registration successful');
        window.location.href='/login';
      } else {
        toast.error('Registration failed');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error('An error occurred');
      // Handle the error here.
    }
    // Backend API Call operation is handled here.
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
                <h3>Register</h3>

                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>Register</li>
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
                      <form name="signupform" method="post" onSubmit={handleSubmit(onSubmit)} className="row sign-up-form">
                        <div className="col-md-12">
                          <Link href="#" className="btn btn-google ico-left">
                            <img
                              src="/assets/img/google.png"
                              alt="google-icon"
                            />{" "}
                            Sign up with Google
                          </Link>
                        </div>
                        <div className="col-md-12 text-center">
                          <div className="separator-line">
                            Or, sign up with your email
                          </div>
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Full name</p>
                          <input
                          {...register("name")}
                          className="form-control name"
                            type="text"
                            name="name"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Email address</p>
                          <input
                          {...register("email")}
                          className="form-control email"
                            type="email"
                            name="email"
                            placeholder="example@example.com"
                          />
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Phone Number</p>
                          <input
                          {...register("phone")}
                          className="form-control email"
                            type="phone"
                            name="phone"
                            placeholder="XXXXXXXXXX"
                          />
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Password</p>
                          <div className="wrap-input">
                            <span className="btn-show-pass ico-20">
                              <span className="flaticon-visibility eye-pass"></span>
                            </span>
                            <input
                          {...register("password")}
                          className="form-control password"
                              type="password"
                              name="password"
                              placeholder="min 8 characters"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-data">
                            <span>
                              By clicking “Create Account”, you agree to our
                              <Link href="terms-condition">Terms</Link> and that
                              you have read our
                              <Link href="privacy-policy"> Privacy Policy</Link>
                            </span>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn--theme hover--theme submit"
                          >
                            Create Account
                          </button>
                        </div>
                        <div className="col-md-12">
                          <p className="create-account text-center">
                            Already have an account?{" "}
                            <Link href="login" className="color--theme">
                              Log in
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
