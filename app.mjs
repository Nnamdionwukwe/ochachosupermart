import express from "express";
import cors from "cors";
import { collection } from "./mongo.mjs";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (request, response) => {});

app.post("/", async (request, response) => {
  const { msg } = request.body;

  const data = {
    msg: msg,
  };

  await collection.insertMany([data]);
});

app.listen(8000, () => {
  console.log("port connected");
});
