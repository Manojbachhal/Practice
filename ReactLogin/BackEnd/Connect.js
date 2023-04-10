const mongoose = require("mongoose");
const Connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/assignment");
  console.log("DB Connect");
};
module.exports = Connection;
