"use client";


import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { CookiesProvider, useCookies } from "react-cookie";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [cookies, setCookie] = useCookies(["token"]);

  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });
  
  
  const formOptions = { resolver: yupResolver(validationSchema) };
  

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit1 = async(formData, event) => {
    event.preventDefault();
    // Backend API Call operation is handled here.
    try {
      const res = await axios.post(`http://165.232.130.162/Spanisch_lernen/public/api/login?email=${formData.email}&password=${formData.password}`);
      console.log(res.data); // Assuming res.data contains the response data you want to log.
      // Handle the response data here.
      if(res.data.success){
        setCookie("token", res.data.token, { path: "/" });
        toast.success("Login  successful");
        //window.location.href='/about';
        router.push("/about");

      }
         
      else{
        toast.error("An error occurred");
        //alert('Invalid Credentials');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error("An error occurred");
      // Handle the error here.
    }
  };
    
  


  return (
    <div>
      <section
        className="banner"
        // style="background-image:url(assets/img/banner8.jpg)"

        style={{
        backgroundImage: `url(/assets/img/banner8.jpg)`,
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
                <h3>Login</h3>

                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
        <section id="login" className="bg--scroll login-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="register-page-wrapper r-16 bg--fixed">
                <div className="row">
                  <div className="col-md-6">
                    <div className="register-page-txt color--white">
                      {" "}
                      <img
                        className="img-fluid"
                        src="/assets/img/logo-white.svg"
                        alt="logo-image"
                      />
                      <h2 className="s-42 w-700">Welcome</h2>
                      <h2 className="s-42 w-700">back to Trisfusa</h2>
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
                  <div className="col-md-6">
                    <div className="register-page-form">
                      <form name="signinform" method="post" onSubmit={handleSubmit(onSubmit1)} className="row sign-in-form">
                       
                          <div>
                            <button onClick={()=>signIn("google")}>
                              <div className="col-md-12">
                               <Link href="#" className="btn btn-google ico-left">
                                  <img
                                    src="/assets/img/google.png"
                                     alt="google-icon"
                                   />
                                   {" "}
                                    Sign in with Google
                                </Link>
                            
                               </div>
                            </button>
                          </div>
                        <div className="col-md-12 text-center">
                          <div className="separator-line">
                            Or, sign in with your email
                          </div>
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Login for</p>
                          <select name="" id="" className="form-control login">
                            <option value="">Handwerker</option>
                            <option value="">Lieferanten</option>
                            <option value="">Privat </option>
                          </select>
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
                          <div className="text-red-500 ml-2 mt-2">
              {errors.email?.message}
            </div>
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Password</p>
                          <div className="wrap-input">
                            <span className="btn-show-pass ico-20">
                              <span className="flaticon-visibility eye-pass" onClick={handleTogglePassword} style={{ cursor: 'pointer' }}></span>
                            </span>
                            <input
                            {...register("password")}
                              className="form-control password"
                              type={showPassword ? 'text' : 'password'}
                              name="password"
                              placeholder="* * * * * * * * *"
                            />
                            <div className="text-red-500 ml-2 mt-2">
              {errors.password?.message}
            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="reset-password-link">
                            <p className="p-sm">
                              <Link href="/reset-password" className="color--theme">
                                Forgot your password?
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button onClick={handleSubmit(onSubmit1)}
                            type="submit"
                            className="btn btn--theme hover--theme submit"
                          >
                            Log In
                          </button>
                        </div>
                        <div className="col-md-12">
                          <p className="create-account text-center">
                            Don't have an account?{" "}
                            <Link href="/register" className="color--theme">
                              Sign up
                            </Link>
                          </p>
                        </div>
                      </form>
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

export default Login;
