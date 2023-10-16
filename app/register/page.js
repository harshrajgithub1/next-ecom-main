import Link from "next/link";
import React from "react";

const Registration = () => {
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
                      <form name="signupform" className="row sign-up-form">
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
                            className="form-control name"
                            type="text"
                            name="name"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Email address</p>
                          <input
                            className="form-control email"
                            type="email"
                            name="email"
                            placeholder="example@example.com"
                          />
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Password</p>
                          <div className="wrap-input">
                            <span className="btn-show-pass ico-20">
                              <span className="flaticon-visibility eye-pass"></span>
                            </span>
                            <input
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
