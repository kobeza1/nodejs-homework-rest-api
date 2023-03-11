const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SNGRD_KEY } = process.env;
sgMail.setApiKey(SNGRD_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "wildlifepicture@gmail.com" };
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
