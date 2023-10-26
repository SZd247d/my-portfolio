import React, { useEffect } from "react";

const StripeBuyButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <stripe-buy-button
      buy-button-id="buy_btn_1O5SjoLF2G0bhYLAOWgkJ40b"
      publishable-key={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
    ></stripe-buy-button>
  );
};

export default StripeBuyButton;
