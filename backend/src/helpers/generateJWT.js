import jwt from "jsonwebtoken";

export const MY_SECRET = "MySecreto";

const generateJWT = (id) => {
  return new Promise((res, rej) => {
    const payload = { id };
    jwt.sign(payload, MY_SECRET, { expiresIn: "7d" }, (err, token) => {
      if (err) {
        console.log(err);
        rej(err);
      } else {
        res(token);
      }
    });
  });
};

export default generateJWT;
