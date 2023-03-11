const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { User } = require("../../models");
const { v4 } = require("uuid");
const { sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exists`);
  }
  const verificationToken = v4();
  const avatarURL = gravatar.url(email);
  const newUser = new User({ name, email, avatarURL, verificationToken });
  newUser.setPassword(password);
  await newUser.save();

  const mail = {
    to: email,
    subject: "Email confirmation",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        name,
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = signup;
