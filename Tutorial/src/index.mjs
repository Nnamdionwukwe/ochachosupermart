import express, { request, response } from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import { mockUsers } from "./utils/constants.mjs";
import passport from "passport";
import mongoose from "mongoose";
import "./stratagies/localStrategy.mjs";
import { MongoClient, ServerApiVersion } from "mongodb";

//MOGOdB PASSWORD BPrCHoUNgRimMriW

const app = express();

// const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://nnamdionwukwe:BPrCHoUNgRimMriW@cluster0.zsory0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// mongoose
//   .connect("mongodb://localhost/express_tutorial")
//   .then(() => console.log("Connected to Database"))
//   .catch((err) => console.log(`Error: ${err}`));

app.use(express.json());
app.use(cookieParser("helloWorld"));
app.use(
  session({
    //FOR PRODUCTION THE SECRET SHOULDN'T BE GUESSABLE
    secret: "mike the dev",
    saveUninitialized: false,
    resave: false,
    //HOW TO SET THE USER LOGGED IN SESSION BEFORE AUTHOMATICALLY LOGOUT THEM OUT BY THE BACKEND SERVER

    cookie: {
      //THIS IS ONE HOUR TIMEOUT
      maxAge: 10000 * 60,
    },
  })
);

app.use(passport.initialize());
// //ATTCHING A DYNAMIC USER PROPERTY TO THE OBJECT CALLED YOUR USER TO KNOW THE USER WHO ACCTUALLY MADE THE REQUEST
app.use(passport.session());

app.use(routes);

//DEPEND ON THE AUTHENTICATOR YOU ARE USING IT CAN GOOGLE OR FACEBOOK THEN YOU WRITE IT IN AUTHENTICATE FIELD BELOW
app.post("/api/auth", passport.authenticate("local"), (request, response) => {
  request.sendStatus(200);
});

app.get("/api/auth/status", (request, response) => {
  console.log("Inside /auth/status");
  console.log(request.user);
  console.log(request.session);
  return request.user ? response.send(request.user) : response.sendStatus(401);
});

app.post("/api/auth/logout", (request, response) => {
  if (!request.user) return response.sendStatus(401);
  request.logout((err) => {
    if (err) return response.sendStatus(400);
    response.send(200);
  });
});

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  console.log(request.session);
  console.log(request.session.id);
  //WHITH THIS VISITED LINE OF CODE I CAN TRACK EACH USER THAT MAKES A REQUEST TO MY WEBSITE AND WITHOUT THE LINE OF CODE THE SERVER WILL KEEP GENERATING RANDOM SESSION IDs FOR THE CLIENT EACH TIME THERE VISIT MY WEBSITE
  request.session.visited = true;
  //SENDING A COOKIE FROM THIS ROUTE ENDPOINT TO ALLOW ACCESS TO ANOTHER ROUTE ENDPOINT WHICH IS THE PRODUCTS ROUTE ENDPOINT...
  response.cookie("hello", "world", { maxAge: 10000, signed: true });
  response.status(201).send({ msg: "Hello Michael" });
});

//LOGGING IN WITH PASSPORT INITIALIZATION
app.post("/api/auth2", (request, response) => {
  const {
    body: { username, password },
  } = request;
  const findUser = mockUsers.find((user) => user.username === username);
  if (!findUser || findUser.password !== password)
    return response.status(401).send({ msg: "BAD CREDENTIALS" });

  request.session.user = findUser;
  return response.status(200).send(findUser);
});

app.get("/api/auth2/status", (request, response) => {
  request.sessionStore.get(request.session.user, (err, session) => {
    console.log(session);
  });

  return request.session.user
    ? response.status(200).send(request.session.user)
    : response.status(401).send({ msg: "Not Athunticated" });
});

app.post("/api/cart", (request, response) => {
  if (!request.session.user) return response.sendStatus(401);
  const { body: item } = request;
  const { cart } = request.session;

  if (cart) {
    cart.push(item);
  } else {
    request.session.cart = [item];
  }
  return response.status(201).send(item);
});

app.get("/api/cart", (request, response) => {
  if (!request.session.user) return response.sendStatus(401);
  return response.send(request.session.cart ?? []);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
