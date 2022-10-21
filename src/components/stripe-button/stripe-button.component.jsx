import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JVJ6wBDiM79ZwHNmCIq0xYV6g2Codxs4MKnvtDJYiXaQeezCp9KlWPwiTvDknNEQ44o1BVtCZRcJVnk7UmvQxjQ007UeWmrhz";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful!");
  };
  return (
    <StripeCheckout
      lalbel="Pay Now"
      name="Crown Clothing Co"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
