const express = require("express");
const RecipeController = require("../controllers/RecipeController");
const { body } = require("express-validator");
const handleErrorMessage = require("../middlewares/handleErrorMessage");
const router = express.Router();

router.get("", RecipeController.index);
router.post(
  "",
  [
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("ingredients").notEmpty().isArray({ min: 2 }),
  ],
  handleErrorMessage,
  RecipeController.store
);
router.get("/:id", RecipeController.show);
router.delete("/:id", RecipeController.destroy);
router.patch("/:id", RecipeController.update);

module.exports = router;
