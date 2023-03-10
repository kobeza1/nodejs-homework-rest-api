const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const nodemailer = require("nodemailer");
const { META_PASS } = process.env;
const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "kobeza1@meta.ua",
    pass: META_PASS,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "wildlifepicture@gmail.com",
  from: "kobeza1@meta.ua",
  subject: "Test email",
  html: "<p>New message</p>",
};

transporter
  .sendMail(email)
  .then(() => console.log("Email sent"))
  .catch((error) => console.log(error.message));

const contactsRouter = require("./routes/api/contacts");
const authRouter = require("./routes/api/auth");
const usersRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);
app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;
