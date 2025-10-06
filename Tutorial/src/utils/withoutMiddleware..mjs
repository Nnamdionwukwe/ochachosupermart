//WITHOUT A MIDDLEWARE
// app.get("/api/users/:id", (request, response) => {
//   console.log(request.params);
//   const parsedId = parseInt(request.params.id);
//   if (isNaN(parsedId))
//     return response.status(400).send({ msg: "Bad Request. Invalid ID." });

//   const findUser = mockUsers.find((user) => user.id === parsedId);
//   if (!findUser) return response.sendStatus(404);
//   return response.send(findUser);
// });

//WITHOUT A MIDDLEWARE

// app.put("/api/users/:id", (request, response) => {
//   const {
//     body,
//     params: { id },
//   } = request;

//   const parsedId = parseInt(id);
//   if (isNaN(parsedId)) return response.sendStatus(400);

//   const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);

//   if (findUserIndex === -1) return response.sendStatus(404);

//   mockUsers[findUserIndex] = { id: parsedId, ...body };
//   return response.sendStatus(200);
// });

//WITHOUT A MIDDLEWARE
// app.patch("/api/users/:id", (request, response) => {
//   const {
//     body,
//     params: { id },
//   } = request;

//   const parsedId = parseInt(id);
//   if (isNaN(parsedId)) return response.sendStatus(400);

//   const finduserIndex = mockUsers.findIndex((user) => user.id === parsedId);

//   if (finduserIndex === -1) return response.sendStatus(404);

//   mockUsers[finduserIndex] = { ...mockUsers[finduserIndex], ...body };
//   return response.sendStatus(200);
// });

//WITHOUT A MIDDLEWARE
// app.delete("/api/users/:id", (request, response) => {
//   const {
//     params: { id },
//   } = request;
//   const parsedId = parseInt(id);
//   if (isNaN(parsedId)) return response.sendStatus(400);

//   const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
//   if (findUserIndex === -1) return response.sendStatus(404);
//   mockUsers.splice(findUserIndex, 1);
//   return response.sendStatus(200);
// });

// localhost:3000
// localhost:3000/users
// localhost:3000/products
