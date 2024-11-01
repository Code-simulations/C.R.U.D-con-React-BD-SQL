import mysql from "mysql2/promise";
import color from "chalk";

const connections = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      password: "",
      port: 3306,
      user: "root",
      database: "prueba",
    });
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(color.magenta("                               The connection to the database is successful"));
    console.log();
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    return connection;
  } catch (error) {
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                            There was a problem with the database connection"));
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
  }
};

const connection = await connections();
export default connection;
