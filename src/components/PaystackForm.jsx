import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import axios from "axios"; // For submitting form data to your backend

const PaystackForm = () => {
  const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your actual public key
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0); // Amount in the lowest currency unit (e.g., kobo for NGN)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Configuration for Paystack
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100, // Paystack requires amount in kobo/lowest currency unit
    publicKey,
    metadata: {
      name,
      phone,
    },
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    // Called after a successful transaction
    console.log(reference);
    // You should send the reference to your backend for verification
    axios
      .post("/api/verify-payment", { reference })
      .then((res) => {
        alert("Payment successful and verified!");
        // Handle post-payment logic (e.g., redirect user to a success page)
      })
      .catch((err) => console.error(err));
  };

  const onClose = () => {
    // Called when the user closes the payment modal
    alert("Payment canceled by user.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Before opening Paystack, you can submit other form data to your server if needed
    // Then initialize the payment
    initializePayment(onSuccess, onClose);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount (e.g., 1000)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaystackForm;
