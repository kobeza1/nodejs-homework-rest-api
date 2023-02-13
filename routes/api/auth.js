const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { joiLoginSchema, joiSignUpSchema } = require("../../models/user");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/signup", validation(joiSignUpSchema), ctrlWrapper(ctrl.signUp));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

module.exports = router;
