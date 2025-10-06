import { mockUsers } from "../utils/listOfUsers.mjs";
import { Router } from "express";

const router = Router();

router.post("/api/login", (request, response) => {
  const {
    body: { username, password },
  } = request;
  const findUser = mockUsers.find((user) => user.username === username);
  if (!findUser || findUser.password !== password)
    return response.status(401).send({ msg: "BAD CREDENTIALS" });

  request.session.user = findUser;
  return response.status(200).send(findUser);
});

router.get("/api/login/status", (request, response) => {
  request.sessionStore.get(request.sessionId, (err, session) => {
    console.log(session);
  });
  return request.session.user
    ? response.status(200).send(request.session.user)
    : response.status(401).send({ msg: "WRONGE USERNAME AND PASSWORD" });
});

export default router;
