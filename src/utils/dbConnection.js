import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.dbConnectionString,
});

db.query("SELECT NOW()")
  .then((result) => {
    console.log("Database connected!");
    console.log(result.rows);
  })
  .catch((error) => {
    console.error("Database connection failed:");
    console.error(error.message);
  });

  //Testing database connection

console.log("dbConnection loaded"); // Testing import to page.js
