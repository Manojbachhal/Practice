const express = require("express");
const Connection = require("./Connect");
const { Login, register } = require("./Controller/LoginController");
const app = express();
app.listen(3000, async () => {
  await Connection();
  console.log("Listing to http://localhost:3000");
});

app.get("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Login({ email, password });
    res.send({
      message: "Login SuccesFull",
      user,
    });
  } catch (error) {
    res.status(400).send("User Not Found");
  }
});

app.post("register", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await register({ email, password });
    res.send({
      massage: "Registration sucessfull",
      data: user,
    });
  } catch (error) {
    res.status(500).send(new Error("Already Registered"));
  }
});
