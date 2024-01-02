"use client"
import React, { useState, useEffect } from "react";
import Payment from "../payment/page";
import Link from 'next/link'
import { apiUrl } from "@/app/constant/constant";
const page = () => {
  const [subscription, setSubscription] = useState([]);

  const getSubscriptions = async () => {
    try {
      const response = await fetch(`${apiUrl}api/subscriptioncharge`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
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
                <h3>SUBSCRIPTION</h3>
                <ul className="breadcrumb">
                  <li><Link href="/">Start</Link></li>
                  <li>SUBSCRIPTION</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        </section>
      <section class="py-5 bg-primary">
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<div class="card bg-success mb-5 mb-lg-0 rounded-lg shadow">
					<div class="card-header">
						<h5 class="card-title text-white-50 text-uppercase text-center">Free</h5>
						<h6 class="h1 text-white text-center">$0<span class="h6 text-white-50">/month</span></h6>
					</div>
					<div class="card-body bg-light rounded-bottom">
						<ul class="list-unstyled mb-4">
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-success"></i></span>Single User</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-success"></i></span>5GB Storage</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-success"></i></span>Unlimited Public Projects</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-success"></i></span>Community Access</li>
							<li class="text-muted mb-3"><span class="mr-3"><i class="fas fa-times"></i></span>Unlimited Private Projects</li>
							<li class="text-muted mb-3"><span class="mr-3"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
							<li class="text-muted mb-3"><span class="mr-3"><i class="fas fa-times"></i></span>Free Subdomain</li>
							<li class="text-muted mb-3"><span class="mr-3"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
						</ul>
            <Payment amount={2} currencyCode="USD" />
					</div>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="card bg-warning mb-5 mb-lg-0 rounded-lg shadow">
					<div class="card-header">
						<h5 class="card-title text-white-50 text-uppercase text-center">Plus</h5>
						<h6 class="h1 text-white text-center">$9<span class="h6 text-white-50">/month</span></h6>
					</div>
					<div class="card-body bg-light rounded-bottom">
						<ul class="list-unstyled mb-4">
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-warning"></i></span><strong>5 Users</strong></li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-warning"></i></span>50GB Storage</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-warning"></i></span>Unlimited Public Projects</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-warning"></i></span>Community Access</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-warning"></i></span>Unlimited Private Projects</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-warning"></i></span>Dedicated Phone Support</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-warning"></i></span>Free Subdomain</li>
							<li class="text-muted mb-3"><span class="mr-3"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
						</ul>
            <Payment amount={9} currencyCode="USD" />
					</div>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="card bg-danger mb-5 mb-lg-0 rounded-lg shadow">
					<div class="card-header">
						<h5 class="card-title text-white-50 text-uppercase text-center">Pro</h5>
						<h6 class="h1 text-white text-center">$29<span class="h6 text-white-50">/month</span></h6>
					</div>
					<div class="card-body bg-light rounded-bottom">
						<ul class="list-unstyled mb-4">
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-danger"></i></span><strong>Unlimited Users</strong></li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-danger"></i></span>150GB Storage</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-danger"></i></span>Unlimited Public Projects</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-danger"></i></span>Community Access</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-danger"></i></span>Unlimited Private Projects</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-danger"></i></span>Dedicated Phone Support</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-danger"></i></span><strong>Unlimited</strong> Free Subdomains</li>
							<li class="mb-3"><span class="mr-3"><i class="fas fa-check text-danger"></i></span>Monthly Status Reports</li>
						</ul>
            <Payment amount={29} currencyCode="USD" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
    
    
    
  )
}

export default page
