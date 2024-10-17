import mysql from "mysql2/promise";
import { dbConfig } from "../config/db.config.js";
import chalk from "chalk";

const connections = async () => {
  try {
    const connections = await mysql.createConnection(dbConfig);
    const [[isConnected]] = await connections.query("SELECT 1 + 1 = 2;");
    const isTrue = Boolean(isConnected["1 + 1 = 2"]);
    if (isTrue) {
      console.log(chalk.blue("-----------------------------------------------------------------------------------------------------"));
      console.log(chalk.magenta("                             connection with database is successfully"));
      console.log(chalk.blue("-----------------------------------------------------------------------------------------------------"));
      return connections;
    }
  } catch (error) {
    console.log(chalk.blue("-----------------------------------------------------------------------------------------------------"));
    console.log(chalk.red("                                Error connections on Data Base"));
    console.log(chalk.blue("-----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(chalk.blue("-----------------------------------------------------------------------------------------------------"));
  }
};

export default connections;
