//FUNCTION MIDDLEWARE TO GET CURRENT VISITED URL
export const loggingMiddleware = (request, response, next) => {
  console.log(`${request.method} - ${request.url}`);
  next();
};
