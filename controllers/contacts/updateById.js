const { Contact } = require("../../models");
const createError = require("http-errors");

const updateById = async (req, res, next) => {
  const { id } = req.params;
  // const { name, email, phone } = req.body;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw createError(404, `Contact with id=${id} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    message: `contact updated`,
    data: {
      result,
    },
  });
};

module.exports = updateById;
