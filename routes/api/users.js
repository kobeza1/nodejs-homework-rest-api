const express = require("express");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { subscriptionJoiSchema } = require("../../models/user");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/",
  auth,
  validation(subscriptionJoiSchema),
  ctrlWrapper(ctrl.changeSubscr)
);

module.exports = router;
