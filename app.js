const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const boardgames = require("./Controller/boardgamesController");
const users = require("./Controller/usersController");
const login = require("./Controller/loginController");


// var access
require("dotenv").config();

//cadena de conexión a la base de datos
const conn = process.env.DATABASE_URL;
const port = 8000;

// DB connection
mongoose.connect(conn);
const database = mongoose.connection;

// verify connection
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("successfully connected");
});

// const for express tools
const app = express();

//preparing all controllers and tools
app.use(express.json());
app.use(cors());
app.use("/boardgames", boardgames);
app.use("/users", users );
app.use("/login", login);


//port ready
app.listen(port, () => {
  console.log("server running at http://localhost:" + port);
});