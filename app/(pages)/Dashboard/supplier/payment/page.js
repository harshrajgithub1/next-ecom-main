"use client"
import React, { useState } from "react";
import GooglePayButton from "@google-pay/button-react";

import Link from "next/link";
//import "./style.css";

const page = () => {
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId:"exampleGateMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "BCR2DN4TZKBYFU3O",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };

 

  const isTop = window === window.top;


  return (
    <div>
    <section
    className="banner"
    // style="background-image:url(/assets/img/banner6.jpg)"

    style={{
    backgroundImage: `url(/assets/img/banner6.jpg)`,
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
            <h3>Payment</h3>
            <ul className="breadcrumb">
              <li>
                <Link href="/">Start</Link>
              </li>
              <li>Payment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
   
      
      
      <div className="demo">
        <GooglePayButton
          environment="TEST"
          
          paymentRequest={paymentRequest}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}
          
        />
      </div>

      <div className="note" style={{ display: isTop ? "none" : "" }}>
        <p>
          Note: This page may need to open in a new window for it to function
          correctly.
        </p>
        <p>
          <a href="/" target="_blank">
            Open in new window
          </a>
          .
        </p>
      </div>
    </div>
   
  )
}

export default page
