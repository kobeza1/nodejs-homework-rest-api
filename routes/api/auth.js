const express = require("express");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { joiLoginSchema, joiSignUpSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiSignUpSchema), ctrlWrapper(ctrl.signUp));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
