//import mongoose to create new schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

//create schema
const todoItemSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
});

//export this schema
module.exports = mongoose.model("TodoItem", todoItemSchema);
