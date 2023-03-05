const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const TodoItem = require("./models/todoItems");

const app = express();
//use express.json() to get data into json format
app.use(express.json());

//port
const PORT = 3001;

//lets connectt to mongo db ..
//add port and connect to server
const start = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    app.listen(PORT, () => console.log("server connected"));
  } catch (error) {
    console.log("error from catch", error);
  }
};
start();

// app.get("/api/items", async (req, res) => {
//   try {
//     const allTodoItems = await TodoItem.find({});
//     res.status(200).json(allTodoItem);
//   } catch (err) {
//     res.json(err);
//   }
// });
