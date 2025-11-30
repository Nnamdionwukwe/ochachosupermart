import express from "express";
import { mockUsers } from "./users.js";
// import { product } from "./products.js";
import product from "./Data.json";

const app = express();

app.get("/", (request, response) => {
  response.send("Port Connected Successfully");
});

app.get("/api/users", (request, response) => {
  response.send(mockUsers);
});

app.get("/api/products", (request, response) => {
  response.send(product);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
