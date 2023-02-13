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

  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized("Email or password mismatch");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  res.json({
    status: "success",
    code: 201,
    data: {
      token,
    },
  });
};

module.exports = login;
