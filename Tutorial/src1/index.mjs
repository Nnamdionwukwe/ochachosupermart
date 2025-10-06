import express, { response } from "express";
import usersRouter from "./routes/users.mjs";
import productRouter from "./routes/products.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import homePageRouter from "./routes/homePage.mjs";
import loginRouter from "./routes/loginPage.mjs";
import cartRouter from "./routes/cartPage.mjs";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

import "./routes/strategies/local-strategy.mjs";
// import "./routes/strategies/discord-strategy.mjs";

import { MongoClient, ServerApiVersion } from "mongodb";

const app = express();

// const DB_URL = "mongodb://localhost:27017/tutorial";

// mongoose.connect(DB_URL);

// const conn = mongoose.connection;

// conn.once(
//   ("open",
//   () => {
//     console.log("successfully database connected");
//   })
// );

// conn.on("error", () => {
//   console.log("error connecting to database");
//   process.exit();
// });

//0.0.0.0
//0.0.0.0:27017

// mongoose
//   .connect("mongodb://localhost/express_tutorial")
//   .then(() => console.log("Connected to Database"))
//   .catch((err) => console.log(`Error: ${err}`));

mongoose
  .connect("mongodb://0.0.0.0:27017/tutorial")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error: ${err}`));

app.use(express.json());
app.use(cookieParser("helloword"));
app.use(
  session({
    secret: "mike the dev",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 6000 * 60 * 10,
    },
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(usersRouter);
app.use(loginRouter);
app.use(homePageRouter);
app.use(productRouter);
app.use(cartRouter);

app.post(
  "/api/user/login",
  passport.authenticate("local"),
  (request, response) => {
    response.sendStatus(200);
  }
);

app.get("/api/user/login/status", (request, response) => {
  console.log(`Inside /auth/status endpoint`);
  console.log(request.user);
  console.log(request.session);
  return request.user ? response.send(request.user) : response.sendStatus(401);
});

app.post("/api/user/logout", (request, response) => {
  if (!request.user) return response.sendStatus(401);
  request.logout((err) => {
    if (err) return response.sendStatus(400);
    response.send(200);
  });
});

app.get("/api/user/login/discord", passport.authenticate("discord"));
app.get(
  "/api/user/login/discord/redirect",
  passport.authenticate("discord"),
  (request, response) => {
    response.sendStatus(200);
  }
);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Runnimg on Port ${PORT}`);
});

//client_secret = 14HhHvs3iCZC9Kp0OqXT-yGgDJWqrqAq
//client_id = 1374023192112533575
// FOR LOCALHOST
//redirecturl = http://3000/api/user/login/discord/redirect

// FOR PRODUCTION YOU USE THE DOMAIN NAME LIKE VERCEL
