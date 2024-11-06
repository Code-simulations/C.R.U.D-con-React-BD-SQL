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

    if (!newUser)
      return res.status(500).json({ message: "Error inesperado no se udo realizar el registro " });

    return res.status(200).json({ message: "usuario registrado correctamente" });
  } catch (error) {
    console.log(
      color.blue(
        "-----------------------------------------------------------------------------------------------------"
      )
    );
    console.log(
      color.red("                            hubo un error con el controlador de registros")
    );
    console.log(
      color.blue(
        "-----------------------------------------------------------------------------------------------------"
      )
    );
    console.log();
    console.log(error);
    console.log();
    console.log(
      color.blue(
        "-----------------------------------------------------------------------------------------------------"
      )
    );
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const sql = "SELECT * FROM `users` WHERE email=?";

    const [[user]] = await connection.query(sql, [email]);

    if (!user) return res.status(404).json({ message: "usuario no encontrado" });

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) return res.status(404).json({ message: "contraseña incorrecta" });

    const token = await generateJwt(user.id);

    res.cookie("authToken", token, {
      secure: true,
      httpOnly: true,
      maxAge: 3600000,
    });

    res.status(200).json({ message: "iniciando sesión" });
  } catch (error) {
    console.log(
      color.blue(
        "-----------------------------------------------------------------------------------------------------"
      )
    );
    console.log(
      color.red("                            hubo un error con el controlador de acceso")
    );
    console.log(
      color.blue(
        "-----------------------------------------------------------------------------------------------------"
      )
    );
    console.log();
    console.log(error);
    console.log();
    console.log(
      color.blue(
        "-----------------------------------------------------------------------------------------------------"
      )
    );
  }
};

export const session = async (req, res) => {
  try {
    const [[user]] = req.user;
    res.status(200).json({ user: user });
  } catch (error) {
    console.log(
      color.blue(
        "-----------------------------------------------------------------------------------------------------"
      )
    );
    console.log(
      color.red("                            hubo un error con el controlador de acceso")
    );
    console.log(
      color.blue(
        "-----------------------------------------------------------------------------------------------------"
      )
    );
    console.log();
    console.log(error);
    console.log();
    console.log(
      color.blue(
        "-----------------------------------------------------------------------------------------------------"
      )
    );
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("authToken");
    res.status(200).json({ message: "cierre de session exitosa" });
  } catch (error) {
    console.log(error);
  }
};
