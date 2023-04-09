const mongoose = require("mongoose");
const Schema = mongoose.Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", Schema);
module.exports = User;
