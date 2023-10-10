import React from "react";

const Login = () => {
  return (
    <div>
      <section
        class="banner"
        style="background-image:url(assets/img/banner8.jpg)"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="banner-caption">
                <h3>Login</h3>

                <ul class="breadcrumb">
                  <li>
                    <a href="index.php">Start</a>
                  </li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="login" class="bg--scroll login-section division">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="register-page-wrapper r-16 bg--fixed">
                <div class="row">
                  <div class="col-md-6">
                    <div class="register-page-txt color--white">
                      {" "}
                      <img
                        class="img-fluid"
                        src="/assets/img/logo-white.svg"
                        alt="logo-image"
                      />
                      <h2 class="s-42 w-700">Welcome</h2>
                      <h2 class="s-42 w-700">back to Trisfusa</h2>
                      <p class="p-md mt-25">
                        Integer congue sagittis and velna augue egestas magna
                        suscipit purus aliquam
                      </p>
                      <div class="register-page-copyright">
                        <p class="p-sm">
                          &copy; 2023 Trisfusa. <span>All Rights Reserved</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="register-page-form">
                      <form name="signinform" class="row sign-in-form">
                        <div class="col-md-12">
                          <a href="#" class="btn btn-google ico-left">
                            <img
                              src="/assets/img/google.png"
                              alt="google-icon"
                            />{" "}
                            Sign in with Google
                          </a>
                        </div>
                        <div class="col-md-12 text-center">
                          <div class="separator-line">
                            Or, sign in with your email
                          </div>
                        </div>
                        <div class="col-md-12">
                          <p class="p-sm input-header">Login for</p>
                          <select name="" id="" class="form-control login">
                            <option value="">Handwerker</option>
                            <option value="">Lieferanten</option>
                            <option value="">Privat </option>
                          </select>
                        </div>
                        <div class="col-md-12">
                          <p class="p-sm input-header">Email address</p>
                          <input
                            class="form-control email"
                            type="email"
                            name="email"
                            placeholder="example@example.com"
                          />
                        </div>
                        <div class="col-md-12">
                          <p class="p-sm input-header">Password</p>
                          <div class="wrap-input">
                            <span class="btn-show-pass ico-20">
                              <span class="flaticon-visibility eye-pass"></span>
                            </span>
                            <input
                              class="form-control password"
                              type="password"
                              name="password"
                              placeholder="* * * * * * * * *"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="reset-password-link">
                            <p class="p-sm">
                              <a href="reset-password.php" class="color--theme">
                                Forgot your password?
                              </a>
                            </p>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <button
                            type="submit"
                            class="btn btn--theme hover--theme submit"
                          >
                            Log In
                          </button>
                        </div>
                        <div class="col-md-12">
                          <p class="create-account text-center">
                            Don't have an account?{" "}
                            <a href="register.php" class="color--theme">
                              Sign up
                            </a>
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
