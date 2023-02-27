// const { User } = require("../../models");

const getCurrent = async (req, res) => {
  console.log(req.user);
  const { email } = req.user;
  res.json({
    status: "success",
    code: 200,
    user: {
      email,
    },
  });
};

module.exports = getCurrent;
