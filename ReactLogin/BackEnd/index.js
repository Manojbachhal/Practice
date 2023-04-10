const express = require("express");
const Connection = require("./Connect");
const { Login, register } = require("./Controller/LoginController");
const cookieSession = require("cookie-session");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  cookieSession({
    name: "session",
    keys: "abscd#fs@q2",
    maxAge: 100,
  })
);
app.listen(4000, async () => {
  await Connection();
  console.log("Listing to http://localhost:4000");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Login({ email, password });
    // console.log(user, "login");
    if (user.message === "Wrong Password") {
      res.send({
        user,
      });
    } else if (user.message === "User not Exist") {
      res.send({
        user,
      });
    } else {
      res.cookie("token", user.Token, {
        httpOnly: true,
      });
      res.cookie("userEmail", user.data.email, {
        httpOnly: true,
      });
      // res.redirect("http://localhost:3000/home");
      console.log(user);
      res.send(user);
    }
  } catch (error) {
    res.status(401).send("User Not Found");
  }
});

app.post("/register", async (req, res) => {
  try {
    let { email, password } = req.body;
    // console.log(email, password);
    let user = await register(email, password);
    console.log(user);
    res.send({
      massage: "Registration sucessfull",
      data: user,
    });
  } catch (error) {
    res.status(409).send("User Already Registered");
  }
});
