//import pg package
import pg from "pg";
//import dotenv package
import dotenv from "dotenv";

//configure dotenv
dotenv.config();

//get connection string value form .env

const dbConnectionString = process.env.DATABASE_URL;

//set up pool
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
