import jwt from "jsonwebtoken";
import connection from "../db/dataBase.js";
export const validatorJwt = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;

    if (token) return res.status(401).json({ message: "no tienes accesos a esta pagina " });

    const decode = jwt.verify(token, "hola");

    const user = await connection.query("SELECT * from users where id = ?", decode.id);

    if (!user) return res.status(401).json({ message: "tu acceso a la pagina a expirado" });

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
