// import generateJWT from "../helpers/generateJWT.js";
// import connections from "../db/database";

export const register = (req, res) => {
  const { username, password, email } = req.body;
  console.log(username, password, email);
};
