const { User } = require("../../models");
const {NotFound} = require("http-errors");

const verifyEmail = async (req, res) => {
    const {verificationToken} = req.params;
    const user.findOne({verificationToken});
    if(!user) {
        throw NotFound();
    }
    await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: null})
    res.json({
        message: "Successful verification"
    })
};

module.exports = verifyEmail;
