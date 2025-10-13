import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import styles from "./Checkout.module.css";
import { Link } from "react-router-dom";
import { formatNGN } from "../utils/FormartCurrncyNG";

const nairaIconUrl = "/naira.png";

const Checkout = ({ onCheckout }) => {
  const { cartItems } = useCart();
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    city: "",
    zip: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    console.log(
      "Submitting order with:",
      formData,
      "and payment method:",
      paymentMethod
    );
    onCheckout(formData); // A function passed from a parent component
  };

  const calculateTotal = () => {
    // Calculate the total price of all items in the cart
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <Link to="/cart">
        <button className={styles.backBtn}>&larr;</button>
      </Link>

      <div className={styles.checkoutcontainer}>
        <h1>Checkout</h1>
        <div className={styles.checkoutcontent}>
          <div className={styles.checkoutformsection}>
            <h2>Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              {/* Name and Email */}
              <div className={styles.formgroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Phone Number */}
              <div className={styles.formgroup}>
                <label htmlFor="number">Phone Number</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Address details */}
              <div className={styles.formgroup}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formgrouprow}>
                <div className={styles.formgroup}>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="zip">Zip Code</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <h2>Payment Method</h2>
              <div className={styles.paymentoptions}>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  Credit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="transfer"
                    checked={paymentMethod === "transfer"}
                    onChange={() => setPaymentMethod("transfer")}
                  />
                  Bank Transfer
                </label>
              </div>
              {/* You would integrate a payment gateway like Stripe or PayPal here */}
              {paymentMethod === "card" ? (
                <div className={styles.paymentform}>
                  <div className={styles.formgroup}>
                    <label>Card Number</label>
                    <input
                      type="text"
                      placeholder="•••• •••• •••• ••••"
                      required
                    />
                  </div>
                  <p>
                    The delivery fee will be communicated to you via the phone
                    number you provided.
                  </p>
                  {/* Other card details here... */}
                </div>
              ) : (
                <div className={styles.paymentform}>
                  <div className={styles.formgroup}>
                    <label>Bank Name: Access Bank</label>
                    <label>Account Number: 0123456789</label>
                    <label>Account Name: Ochacho Pharmacy & Supermarket</label>
                  </div>
                  <p>
                    Please we have to confirm your Transfer before delivery.
                    Thank you for your understanding. <br /> The delivery fee
                    will be communicated to you via the phone number you
                    provided.
                  </p>
                  {/* Other bank details here... */}
                </div>
              )}
              <button type="submit" className={styles.placeorderbtn}>
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className={styles.checkoutsummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryitems}>
              {cartItems.map((item, index) => (
                <div key={index} className={styles.summaryitem}>
                  <p>
                    {item.name} x {item.quantity}
                  </p>

                  <div className={styles.totalAmountContainer}>
                    <p>{formatNGN(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.summarytotal}>
              <strong>Total:</strong>

              <div className={styles.totalAmountContainer}>
                {/* <img
                  src={nairaIconUrl}
                  alt="Naira Symbol"
                  className={styles.nairaIcon}
                /> */}

                <span className={styles.totalAmount}>
                  {formatNGN(calculateTotal())}
                </span>
              </div>
              {/* <span>${calculateTotal()}</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
