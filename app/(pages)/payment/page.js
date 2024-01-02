"use client"
import { paypalApiKey } from "@/app/constant/constant";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

import Link from "next/link";
//import "./style.css";

const Payment = (props) => {
  console.log(props);
  const [nonce, setNonce] = useState(null);
    const initialOptions = {
      clientId: paypalApiKey,
      currency: "USD",
      intent: "capture",
      // purchase_units: [
      //   {
      //     description: "Your description",
      //     amount: {
      //       currency_code: "INR",
      //       value: 500.0,
      //     },
      //   },
      // ],
  };
  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log("Transaction completed with order ID:", data.orderID);
      console.log("Nonce Token:", details.purchase_units[0].payments.captures[0].id);
      setNonce(details.purchase_units[0].payments.captures[0].id);
    });
  }
  return (
    <div className="container">
      <div className="demo">
      <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons amount={props.amount} onApprove={handleApprove} />
        </PayPalScriptProvider>
      </div>

    </div>
    
    
   
  )
}

export default Payment
