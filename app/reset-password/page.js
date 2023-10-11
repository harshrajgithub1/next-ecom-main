import Link from "next/link";
import React from "react";

const ResetPassword = () => {
  return (
    <div>
      <section
        className="banner"
        // style="background-image:url(assets/img/banner1.jpg)"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>Reset Password</h3>

                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>Reset Password</li>
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
                    />
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn--theme hover--theme submit"
                    >
                      Reset My Password
                    </button>
                  </div>
                  <div className="col-md-12">
                    <div className="form-data text-center">
                      <span>
                        <Link href="login">Never mind I remembered!</Link>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12 reset-form-msg">
                    <span className="loading"></span>
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

export default ResetPassword;
