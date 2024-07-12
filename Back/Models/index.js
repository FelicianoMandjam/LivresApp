import { error } from "console";
import connection from "../config/db.js";
import { Sequelize } from "sequelize";
import authorModel from "./author.model.js";
import bookModel from "./book.model.js";

try {
  await connection.authenticate();
  console.log("The connection to the db is successfully");
} catch (e) {
  console.error("Unable to connect to the database:", error);
}

authorModel(connection, Sequelize);
bookModel(connection, Sequelize);

const { Author, Book } = connection.models;

Author.hasMany(Book, { as: "Book_id" });
Book.belongsTo(Author);

await connection.sync({ force: false, alter: true });
console.log("Syncro ok");

export { Author, Book };
