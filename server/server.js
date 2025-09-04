//import express and cors
import express from "express"; //ES6 syntax
import cors from "cors";
import { db } from "./dbConnection.js"; //import the pool

//initialiase express
const app = express();
//use express and cors
app.use(cors());
app.use(express.json());

//set up a port
const PORT = 8080;
app.listen(PORT, () => {
  console.info(` Server is running in port ${PORT}`);
});

//set up a root route
//TODO: Read(GET) data in this route
app.get("/", (_, res) => {
  res.json({ message: "Welcome to the server. GET comfy" });
});

//todo: I wnat to READ all data from my table
// https://week-04-assignment-zij1.onrender.com/ --> endpoint, params
app.get("/games", async function (req, res) {
  //we need to query our database here
  const query = await db.query(`SELECT * FROM games;`);
  console.log(query);
  //parse data into JSON and wrangle data
  res.json(query.rows);
});

//todo: I want to create new data in the table
// i want to remember the body and form values
app.post("/add-games", (req, res) => {
  // and element to store the data
  const newGames = req.body;

  //database query
  //in our SQL queries, we can have a placeholder parameter that we will replace with the actual values when the client sends them
  const query = db.query(
    `INSERT INTO games(name, title, platform, message) VALUES ($1, $2, $3, $4)`,
    [
      newGames.formValues.name,
      newGames.formValues.title,
      newGames.formValues.platform,
      newGames.formValues.message,
    ]
  );
  res.json("Data sent", query);
});

app.delete("/games/:id", async (req, res) => {
  const gameId = req.params.id;
  await db.query("DELETE FROM games WHERE id = $1", [gameId]);
  res.json({ message: "game deleted successfully" });
});
