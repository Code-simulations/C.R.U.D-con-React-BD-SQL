import connection from "../db/dataBase.js";
import color from "chalk";
import bcrypt from "bcrypt";
import { generateJwt } from "../helpers/generateJwt.js";

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO `users`( `username`, `email`, `password`) VALUES (?,?,?)";

    const [newUser] = await connection.query(sql, [username, email, hashedPassword]);

    if (!newUser) return res.status(500).json({ message: "Error inesperado no se udo realizar el registro " });

    return res.status(200).json({ message: "usuario registrado correctamente" });
  } catch (error) {
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                            hubo un error con el controlador de registros"));
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
  }
};
