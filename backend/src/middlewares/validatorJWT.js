import jwt from "jsonwebtoken";

const validatorJWT = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.authtoken;
  console.log(token);
  next();
};
export default validatorJWT;
