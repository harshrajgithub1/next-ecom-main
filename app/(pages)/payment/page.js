"use client";
import { paypalApiKey } from "@/app/constant/constant";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";


const Payment = (props) => {
//   console.log(props);
  const [nonce, setNonce] = useState(null);
  const initialOptions = {
    clientId: paypalApiKey,
    currency: "USD",
    intent: "capture",
   
  };
  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log("Transaction completed with order ID:", data.orderID);
      console.log(
        "Nonce Token:",
        details.purchase_units[0].payments.captures[0].id
      );
      setNonce(details.purchase_units[0].payments.captures[0].id);
    });
  };
  return (
    <div className="container">
      <div className="demo">
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons amount={props.amount} onApprove={handleApprove} />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Payment;
