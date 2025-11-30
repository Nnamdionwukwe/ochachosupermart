import React, { useState } from "react";
import axios from "axios";
import { usePaystackPayment } from "paystack";

const CheckoutPage = ({ cartItems, totalAmount }) => {
  const PAYSTACK_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Use your public key
  const userEmail = "user@example.com"; // Get this dynamically from your user context/state

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    addressLine1: "",
    city: "",
    country: "",
  });
  const [checkoutStep, setCheckoutStep] = useState("shipping"); // 'shipping' -> 'payment' -> 'complete'
  const [orderId, setOrderId] = useState(null);

  // --- Shipping Form Handling ---
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const submitShippingInfo = (e) => {
    e.preventDefault();
    // In a real app, you might validate more thoroughly here or send to backend first
    console.log("Shipping info captured:", shippingInfo);
    setCheckoutStep("payment");
  };

  // --- Payment Handling ---
  const config = {
    reference: new Date().getTime().toString(),
    email: userEmail,
    amount: totalAmount * 100, // Amount in kobo (lowest currency unit)
    publicKey: PAYSTACK_PUBLIC_KEY,
    metadata: {
      custom_fields: [
        {
          display_name: "Shipping Address",
          variable_name: "shipping_address",
          value: `${shippingInfo.addressLine1}, ${shippingInfo.city}, ${shippingInfo.country}`,
        },
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

  const handlePaymentSuccess = async (reference) => {
    console.log("Payment successful, reference:", reference.reference);

    try {
      // Step 4: Verify payment on your secure backend server
      const response = await axios.post("/api/complete-order", {
        reference: reference.reference,
        shippingInfo,
        orderItems: cartItems,
      });

      if (response.data.status === "success") {
        setOrderId(response.data.orderId);
        setCheckoutStep("complete");
      } else {
        alert("Payment verified, but order processing failed on the server.");
      }
    } catch (error) {
      console.error("Order completion error:", error);
      alert(
        "There was an error finalizing your order. Please contact support."
      );
    }
  };

  const handlePaymentClose = () => {
    alert("Payment window closed.");
  };

  const initiateCheckout = () => {
    initializePayment(handlePaymentSuccess, handlePaymentClose);
  };

  // --- Rendering Logic ---

  if (checkoutStep === "shipping") {
    return (
      <form onSubmit={submitShippingInfo}>
        <h3>Shipping Details</h3>
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleShippingChange}
          required
        />
        <input
          name="addressLine1"
          placeholder="Address Line 1"
          onChange={handleShippingChange}
          required
        />
        <input
          name="city"
          placeholder="City"
          onChange={handleShippingChange}
          required
        />
        <input
          name="country"
          placeholder="Country"
          onChange={handleShippingChange}
          required
        />
        <button type="submit">Proceed to Payment</button>
      </form>
    );
  }

  if (checkoutStep === "payment") {
    return (
      <div>
        <h3>Confirm Order & Pay</h3>
        <p>Total: NGN {totalAmount.toFixed(2)}</p>
        <button onClick={initiateCheckout}>Pay with Paystack</button>
        <button onClick={() => setCheckoutStep("shipping")}>Go Back</button>
      </div>
    );
  }

  if (checkoutStep === "complete") {
    return (
      <div>
        <h3>Order Complete!</h3>
        <p>Your order #{orderId} has been placed successfully.</p>
        <p>A confirmation email has been sent to {userEmail}.</p>
      </div>
    );
  }
};

export default CheckoutPage;
