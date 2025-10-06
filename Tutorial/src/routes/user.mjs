import { response, Router } from "express";
import {
  query,
  validationResult,
  checkSchema,
  matchedData,
} from "express-validator";
import { mockUsers } from "../utils/constants.mjs";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { resolveIndexByUser } from "../utils/middlewares.mjs";
import session from "express-session";
import { User } from "../mongoose/schemas/user.mjs";

const router = Router();

router.get(
  "/api/users",
  //HOW TO VALIDATE QUERY PARAMETERS
  //VALIDATION WITHOUT A SCHEMA FUNCTION
  query("filter")
    .isString()
    .notEmpty()
    .withMessage("Must not be empty")
    .isLength({ min: 3, max: 10 })
    .withMessage("Must be at leat 3-10 characters"),

  //USING A CHECKSHEMA FUNCTION
  // checkSchema(createUsersFilterValidationSchema),
  (request, response) => {
    console.log(request.session);
    console.log(request.session.id);
    const result = validationResult(request);
    console.log(result);

    const {
      query: { filter, value },
    } = request;

    // when filter and value are undefined
    if (filter && value)
      return response.send(
        mockUsers.filter((user) => user[filter].includes(value))
      );

    return response.send(mockUsers);
  }
);

router.get("/api/users/:id", resolveIndexByUser, (request, response) => {
  const { findUserIndex } = request;
  const findUser = mockUsers[findUserIndex];

  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
});

router.post("/api/users", async (request, response) => {
  const { body } = request;
  const newUser = new User(body);
  try {
    const savedUser = await newUser.save();
    return response.status(201).send(savedUser);
  } catch (err) {
    console.log(err);
    return response.sendStatus(400);
  }
});

// router.post(
//   "/api/users",
//   //HOW TO VALIDATE QUERY PARAMETERS
//   //VALIDATION WITHOUT A SCHEMA FUNCTION
//   // [
//   //   body("username")
//   //     .notEmpty()
//   //     .withMessage("username cannot be empty")
//   //     .isLength({ min: 5, max: 32 })
//   //     .withMessage(
//   //       "username must be at least 5 characters with a max of 32 characters"
//   //     )
//   //     .isString()
//   //     .withMessage("username must be a string"),

//   //   body("displayname").notEmpty().withMessage("displayname cannot be empty"),
//   // ],
//   checkSchema(createUserValidationSchema),
//   (request, response) => {
//     const result = validationResult(request);
//     console.log(result);

//     if (!result.isEmpty())
//       return response.status(400).send({ errors: result.array() });

//     //WHEN USING WITHOUT MATCHEDDATA
//     //const { body } = request;

//     //const data = matchedData(request);
//     // console.log(data);

//     // const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };

//     const data = matchedData(request);
//     const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data };
//     mockUsers.push(newUser);
//     return response.status(201).send(newUser);
//   }
// );

//WITH MIDDLEWARE
router.put("/api/users/:id", resolveIndexByUser, (request, response) => {
  const { body, findUserIndex } = request;

  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  return response.sendStatus(200);
});

//WITH MIDDLEWARE
router.patch("/api/users/:id", resolveIndexByUser, (request, response) => {
  const { body, findUserIndex } = request;

  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return response.sendStatus(200);
});

router.delete("/api/users/:id", resolveIndexByUser, (request, response) => {
  const { findUserIndex } = request;

  mockUsers.splice(findUserIndex, 1);
  return response.sendStatus(200);
});

export default router;
