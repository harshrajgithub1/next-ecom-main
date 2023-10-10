import React from "react";

const ResetPassword = () => {
  return (
    <div>
      <section
        class="banner"
        style="background-image:url(assets/img/banner1.jpg)"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="banner-caption">
                <h3>Reset Password</h3>

                <ul class="breadcrumb">
                  <li>
                    <a href="index.php">Start</a>
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
        class="bg--fixed reset-password-section division"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7 col-lg-5">
              <div class="login-page-logo">
                <img
                  class="img-fluid light-theme-img"
                  src="/assets/img/logo.svg"
                  alt="logo-image"
                />
              </div>
              <div class="reset-page-wrapper text-center">
                <form
                  name="resetpasswordform"
                  class="row reset-password-form r-10"
                >
                  <div class="col-md-12">
                    <div class="reset-form-title">
                      <h5 class="s-26 w-700">Forgot your password?</h5>
                      <p class="p-sm color--grey">
                        Enter your email address, if an account exists we‘ll
                        send you a link to reset your password.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <input
                      class="form-control email"
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                    />
                  </div>
                  <div class="col-md-12">
                    <button
                      type="submit"
                      class="btn btn--theme hover--theme submit"
                    >
                      Reset My Password
                    </button>
                  </div>
                  <div class="col-md-12">
                    <div class="form-data text-center">
                      <span>
                        <a href="login.php">Never mind, I remembered!</a>
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-12 reset-form-msg">
                    <span class="loading"></span>
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
