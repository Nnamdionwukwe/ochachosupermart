import express from "express";
import { mockUsers } from "./users.js";

const app = express();

app.get("/", (request, response) => {
  response.send(mockUsers);
});

app.get("/api/users", (request, response) => {
  response.send(mockUsers);
});

const port = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
