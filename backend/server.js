import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "./sequelize.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//run server
const serverPort = 5001
app.listen(serverPort, async () => {
  console.log(`Express web server running on port ${serverPort}`);
  //database connection
  try {
    await sequelize.authenticate();
    console.log("Connection has been established!");
  } catch (err) {
    console.err("Unable to connect to the database!", err);
  }
});