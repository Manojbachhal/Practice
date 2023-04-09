const User = require("../Model/UserSchema");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (email, password) => {
  let alreadyExist = await User.findOne({ email });
  if (alreadyExist) {
    throw new Error("Already Registered");
  }

  let user = User.create({
    email,
    password: bycrpt.hashSync(password),
  });
  user.toJSON();
  delete user.password;
  return user;
};

const genrateToken = (user) => {
  let payload = {
    _id: user.id,
    email,
  };

  return jwt.sign(payload, "abcd@12345#");
};

const Login = async ({ email, password }) => {
  let user = await User.findOne({ email });
  if (user) {
    user.toJSON();
    if (bycrpt.compareSync(password, user.password)) {
      delete user.password;
      return {
        data: user,
        Token: genrateToken(user),
      };
    }
  }
};

module.exports = {
  Login,
  register,
};
