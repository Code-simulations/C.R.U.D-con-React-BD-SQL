import jwt from "jsonwebtoken";

export const generateJwt = (id) => {
  return new Promise((res, rej) => {
    const payload = { id };

    jwt.sign(payload, "hola", { expiresIn: "5h" }, (err, token) => {
      if (err) {
        rej(err);

        console.log(err);
      } else {
        res(token);
      }
    });
  });
};
