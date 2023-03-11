const createError = require("http-errors");
const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const verifyAgain = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!email) {
    throw createError(400, "Missing required field email");
  }

  if (user.verify) {
    throw createError(400, "Verification has already been passed");
  }

  const mail = {
    to: email,
    subject: "Email confirmation",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Confirm email</a>`,
  };
  await sendEmail(mail);

  res.json({
    code: 200,
    message: "Verification email sent",
  });
};

module.exports = verifyAgain;
