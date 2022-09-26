import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Paymentform from "./Paymentform";

const PUBLIC_KEY =
  "pk_test_51Lk3fFHrYbgUgq222ODanVlW02RI9jQLOfpJyZVw10Iwokt5V5OYvZXwaoRKtVXIV7G692yfQpS6etQMvQzPvlye0007LwVmqo";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripecontainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Paymentform />
    </Elements>
  );
};

export default Stripecontainer;
