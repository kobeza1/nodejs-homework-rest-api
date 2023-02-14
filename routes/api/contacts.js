const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { joiSchema, favoriteJoiSchema } = require("../../models/contact");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:id", ctrlWrapper(ctrl.removeContact));

router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.updateById));

router.patch(
  "/:id/favorite",
  validation(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
