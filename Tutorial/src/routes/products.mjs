import { Router } from "express";

const router = Router();

const products = [
  {
    id: 1,
    name: "Chicken breast",
    price: 12.99,
  },

  {
    id: 2,
    name: "sofa chair",
    price: 10.99,
  },
];

router.get("/api/products", (request, response) => {
  console.log(request.headers.cookie);
  console.log(request.cookies);
  console.log(request.signedCookies.hello);
  //USING A COOKIE TO ALLOW ACCESS FROM A CLIENT TO A ROUTE ENDPOINT SENDNG THE COOKIE FROM THE HOSTED ROUTE ENDPOINT...
  if (request.signedCookies.hello && request.signedCookies.hello === "world")
    return response.send(products);

  return response
    .status(403)
    .send({ msg: "sorry. You need the correct cookie" });
});

export default router;
