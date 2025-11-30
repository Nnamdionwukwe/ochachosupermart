// server.js (Node.js/Express)
import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const PAYSTACK_SECRET_KEY = "YOUR_SECRET_KEY"; // Replace with your actual secret key

app.post("/api/verify-payment", async (req, res) => {
  const { reference } = req.body;

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = response.data;

    if (data.status && data.data.status === "success") {
      // Payment is valid. You can save order details to your database here.
      console.log("Payment successful and verified:", data.data);
      res.status(200).json({ status: "success", message: "Payment verified" });
    } else {
      // Payment not successful or verification failed
      res
        .status(400)
        .json({ status: "error", message: "Payment verification failed" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", message: "Server error during verification" });
  }
});

app.get("/api/users", (request, response) => {
  response.send(mockUsers);
});

app.listen(5000, () => console.log("Server running on port 5000"));

// import React, { useState } from "react";
// import axios from "axios";

// export default function Home() {
//   async function Submit(e) {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:8000/", {});
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   const [msg, setMessage] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:8000/", {
//         msg,
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div className="cont">
//       <form action="POST">
//         <textarea
//           name="text"
//           onChange={(e) => setMessage(e.target.value)}
//           cols="30"
//           rows="10"
//           placeholder="Enter Text"
//         ></textarea>

//         <input type="submit" onClick={submit} value="submit"></input>
//       </form>
//     </div>
//   );
// }
