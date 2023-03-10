const { User } = require("../../models");
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  // const passCompare = bcrypt.compareSync(password, user.password);
  // if (!user || !passCompare) {
  //   throw new Unauthorized("Email or password mismatch");
  // }

  if (!user || !user.verify || !user.comparePassword(password)) {
    throw new Unauthorized("Email/password mismatch or user is not verified");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
