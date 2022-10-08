import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import "./paymentform.css";

function Paymentform() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  const clickedproduct =
    JSON.parse(localStorage.getItem("my_clickedproduct")) || [];

  return (
    <>
      {!success ? (
        <form
          onSubmit={handleSubmit}
          className="form flex flex-col justify-center items-center h-screen"
        >
          <fieldset className="FormGroup">
            <div className="text-[20px] text-blue-700 text-center font-bold">
              {clickedproduct.title}
            </div>
            <div className="text-[20px] text-center text-blue-700 font-bold">
              {clickedproduct.price}
            </div>

            <div className="FormRow">
              <CardElement />
            </div>
          </fieldset>
          <button className="pay">Pay</button>
        </form>
      ) : (
        <div>
          <h2>
            You just bought a sweet spatula congrats this is the best decision
            of you're life
          </h2>
        </div>
      )}
    </>
  );
}

export default Paymentform;
