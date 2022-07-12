const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const boardgames = require("./Controller/boardgamesController");
const users = require("./Controller/usersController");
const login = require("./Controller/loginController");


//acceso a las variables de entorno (base de datos por ej.)
require("dotenv").config();

//cadena de conexión a la base de datos
const conn = process.env.DATABASE_URL;
const port = 8000;

//Conexión a la base de datos
mongoose.connect(conn);
const database = mongoose.connection;

//verificar la conexión con la base de datos
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("successfully connected");
});

//constante para el acceso a todas las funcionalidades de express
const app = express();

//esta funcionalidad nos permite tratar con los json
app.use(express.json());
app.use(cors());
app.use("/boardgames", boardgames);
app.use("/users", users );
app.use("/login", login);


//preparando para escuchar el puerto
app.listen(port, () => {
  console.log("server running at http://localhost:" + port);
});