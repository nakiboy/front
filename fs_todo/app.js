const express = require("express");
require("dotenv").config();
require("./models/db");

const userRouter = require("./routes/user");

const User = require("./models/user");

const app = express();

app.use(express.json());
app.use(userRouter);

const test = async (fullname, register, password) => {
  const user = await User.findOne({ register: register });
  const result = await user.comparePassword(password);
  console.log(result);

  test("Test", "123456" , "test0427");
};

app.get("/test", (req, res) => {
  res.send("HELLO WORLD");
});

app.get("/", (req, res) => {
  res.send({ success: true, message: "Welcome to backend zone!" });
});

app.listen(8000, () => {
  console.log("port is listinning");
});
