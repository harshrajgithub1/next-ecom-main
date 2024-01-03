"use client";
import React, { useState, useEffect } from "react";
import Payment from "../payment/page";
import Link from "next/link";
import { apiUrl } from "@/app/constant/constant";
const Subscription = () => {
  const [subscription, setSubscription] = useState([]);

  const getSubscriptions = async () => {
    try {
      const response = await fetch(`${apiUrl}api/subscriptioncharge`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        // body: formBody
      });

      const responseJson = await response.json();
      if (responseJson.success === "true") {
        const res = responseJson.category;
        setSubscription(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSubscriptions();
  }, []);

  return (
    <div>
      <section
        className="banner"
        style={{
          backgroundImage: `url(/assets/img/banner3.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "540px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>SUBSCRIPTION</h3>
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>SUBSCRIPTION</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card bg-success mb-5 mb-lg-0 rounded-lg shadow">
                <div className="card-header">
                  <h5 className="card-title text-white-50 text-uppercase text-center">
                    Free
                  </h5>
                  <h6 className="h1 text-white text-center">
                    $0<span className="h6 text-white-50">/month</span>
                  </h6>
                </div>
                <div className="card-body bg-light rounded-bottom">
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-success"></i>
                      </span>
                      Single User
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-success"></i>
                      </span>
                      5GB Storage
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-success"></i>
                      </span>
                      Unlimited Public Projects
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-success"></i>
                      </span>
                      Community Access
                    </li>
                    <li className="text-muted mb-3">
                      <span className="mr-3">
                        <i className="fas fa-times"></i>
                      </span>
                      Unlimited Private Projects
                    </li>
                    <li className="text-muted mb-3">
                      <span className="mr-3">
                        <i className="fas fa-times"></i>
                      </span>
                      Dedicated Phone Support
                    </li>
                    <li className="text-muted mb-3">
                      <span className="mr-3">
                        <i className="fas fa-times"></i>
                      </span>
                      Free Subdomain
                    </li>
                    <li className="text-muted mb-3">
                      <span className="mr-3">
                        <i className="fas fa-times"></i>
                      </span>
                      Monthly Status Reports
                    </li>
                  </ul>
                  <Payment amount={2} currencyCode="USD" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card bg-warning mb-5 mb-lg-0 rounded-lg shadow">
                <div className="card-header">
                  <h5 className="card-title text-white-50 text-uppercase text-center">
                    Plus
                  </h5>
                  <h6 className="h1 text-white text-center">
                    $9<span className="h6 text-white-50">/month</span>
                  </h6>
                </div>
                <div className="card-body bg-light rounded-bottom">
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-warning"></i>
                      </span>
                      <strong>5 Users</strong>
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-warning"></i>
                      </span>
                      50GB Storage
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-warning"></i>
                      </span>
                      Unlimited Public Projects
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-warning"></i>
                      </span>
                      Community Access
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-warning"></i>
                      </span>
                      Unlimited Private Projects
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-warning"></i>
                      </span>
                      Dedicated Phone Support
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-warning"></i>
                      </span>
                      Free Subdomain
                    </li>
                    <li className="text-muted mb-3">
                      <span className="mr-3">
                        <i className="fas fa-times"></i>
                      </span>
                      Monthly Status Reports
                    </li>
                  </ul>
                  <Payment amount={9} currencyCode="USD" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card bg-danger mb-5 mb-lg-0 rounded-lg shadow">
                <div className="card-header">
                  <h5 className="card-title text-white-50 text-uppercase text-center">
                    Pro
                  </h5>
                  <h6 className="h1 text-white text-center">
                    $29<span className="h6 text-white-50">/month</span>
                  </h6>
                </div>
                <div className="card-body bg-light rounded-bottom">
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-danger"></i>
                      </span>
                      <strong>Unlimited Users</strong>
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-danger"></i>
                      </span>
                      150GB Storage
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-danger"></i>
                      </span>
                      Unlimited Public Projects
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-danger"></i>
                      </span>
                      Community Access
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-danger"></i>
                      </span>
                      Unlimited Private Projects
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-danger"></i>
                      </span>
                      Dedicated Phone Support
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-danger"></i>
                      </span>
                      <strong>Unlimited</strong> Free Subdomains
                    </li>
                    <li className="mb-3">
                      <span className="mr-3">
                        <i className="fas fa-check text-danger"></i>
                      </span>
                      Monthly Status Reports
                    </li>
                  </ul>
                  <Payment amount={29} currencyCode="USD" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscription;
