import React from 'react'

const ErrorPage = () => {
    const bannerStyle = {
        backgroundImage: 'url(assets/img/banner1.jpg)',
      };
    
      return (
        <div>
        <section className="banner" style={bannerStyle}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-caption">
                  <h3>404</h3>
    
                  <ul className="breadcrumb">
                    <li><a href="/">Start</a></li>
                    <li>404 page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

<section id="page-404" className="bg--white-300 division">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div className="page-404-txt text-center">
              <div className="rel page-404-img">
                <img className="img-fluid" src="/assets/img/error-404.png" alt="error-404-img" />
              </div>
              <h2 className="s-56 w-700 color--dark">Page Not Found</h2>
              <h6 className="s-22 color--grey">
                Oops! The page you are looking for might have been moved, renamed, or might 
                never have existed.
              </h6>
              <a href="/" className="btn btn--theme hover--theme">
                Back to home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ErrorPage
