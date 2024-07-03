import { Sequelize } from "sequelize";
import { ENV } from "./env.js";

const connection = new Sequelize(
  ENV.DB_NAME,
  "root",
  "root",
  {
    host: ENV.DB_HOST,
    dialect: ENV.DIALECT,

    dialectOptions: {
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    },
  }
);

export default connection;
