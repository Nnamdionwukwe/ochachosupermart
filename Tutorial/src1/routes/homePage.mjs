import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  console.log(request.session);
  console.log(request.session.id);
  request.session.visited = true;
  response.cookie("hello", "world", { maxAge: 5000, signed: true });
  response.send({ msg: "Hello" });
});

export default router;
