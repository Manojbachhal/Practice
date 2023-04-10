const User = require("../Model/UserSchema");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const register = async (email, password) => {
  let alreadyExist = await User.findOne({ email });
  if (alreadyExist) {
    throw new Error("Already Registered");
  }

  let user = await User.create({
    email,
    password: bycrpt.hashSync(password),
  });

  user.toJSON();
  delete user.password;
  return user;
};

const genrateToken = (user) => {
  delete user.password;
  let payload = {
    _id: user.id,
    email: user.email,
  };

  return jwt.sign(payload, "abcd@12345#");
};

const Login = async ({ email, password }) => {
  let user = await User.findOne({ email });

  if (user) {
    user.toJSON();
    if (bycrpt.compareSync(password, user.password)) {
      delete user.password;
      console.log(delete user.password);

      return {
        message: "Login Successfull",
        data: user,
        Token: genrateToken(user),
      };
      // return user;
    } else {
      return {
        message: "Wrong Password",
      };
    }
  } else {
    return {
      message: "User not Exist",
    };
  }
};

module.exports = {
  Login,
  register,
};
