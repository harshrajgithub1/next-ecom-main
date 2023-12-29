

"use client"
import Link from "next/link";
import React, { useState } from "react";
import { apiUrl } from '@/app/constant/constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}api/forgotpassword?email=${email}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      });

      const responseJson = await response.json();
      

      if (response.ok) {
        setMessage({ type: 'success', text: responseJson.message });
        toast.success(responseJson.message);
      } else {
        setMessage({ type: 'error', text: responseJson.message });
        toast.error(responseJson.message);
      }

    } catch (error) {
      console.error(error);
      setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section
        className="banner"
        style={{
          backgroundImage: `url(/assets/img/banner1.jpg)`,
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
                <h3>Forgot Password</h3>
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>Forgot Password</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="reset-password"
        className="bg--fixed reset-password-section division"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="login-page-logo">
                <img
                  className="img-fluid light-theme-img"
                  src="/assets/img/logo.svg"
                  alt="logo-image"
                />
              </div>
              <div className="reset-page-wrapper text-center">
                <form
                  name="resetpasswordform"
                  className="row reset-password-form r-10"
                  onSubmit={handleForgotPassword}
                >
                  <div className="col-md-12">
                    <div className="reset-form-title">
                      <h5 className="s-26 w-700">Forgot your password?</h5>
                      <p className="p-sm color--grey">
                        Enter your email address, if an account exists we‘ll
                        send you a link to reset your password.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control email"
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn--theme hover--theme submit"
                    >
                      {loading ? 'Loading...' : 'Forgot My Password'}
                    </button>
                  </div>
                  <div className="col-md-12">
                    <div className="form-data text-center">
                      <span>
                        <Link href="/login">Never mind I remembered!</Link>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12 reset-form-msg">
                    {message && (
                      <div className={message.type === 'success' ? 'success-message' : 'error-message'}>
                        {message.text}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
