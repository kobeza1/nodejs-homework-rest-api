const { User } = require("../../models");

const getAll = async (req, res) => {
  const contacts = await User.find({});
  res.status(200).json({
    status: "success",
    code: 200,
    message: "all users fetched",
    data: { result: contacts },
  });
};

module.exports = getAll;
