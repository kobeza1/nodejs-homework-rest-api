const express = require("express");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch("/", auth, ctrlWrapper(ctrl.changeSubscr));

module.exports = router;
