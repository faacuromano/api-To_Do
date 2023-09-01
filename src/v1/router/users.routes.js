const express = require("express");
const router = express.Router();
const userControllers = require("../../controllers/user.controller");

router
  .get("/", userControllers.getAll)
  .get("/:id", userControllers.getOne)
  .post("/", userControllers.createUser)
  .put("/:id", userControllers.updateUser)
  .delete("/:id", userControllers.deleteUser)

module.exports = router;
