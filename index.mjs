import express from "express";
import { mockUsers } from "./users.js";
import { products } from "./products.js";

const app = express();

app.get("/", (request, response) => {
  response.send("Port Connected Successfully");
});

app.get("/api/users", (request, response) => {
  response.send(mockUsers);
});

app.get("/api/products", (request, response) => {
  response.send(products);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
