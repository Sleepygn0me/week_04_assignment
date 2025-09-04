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
