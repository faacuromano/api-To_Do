const express = require('express');
const router = express.Router();
const workControllers = require("../../controllers/works.controller")

router
  .get("/", workControllers.getAllWorks)
  .get("/:id", workControllers.getOneWork)
  .post("/", workControllers.createWork)
  .put("/:id", workControllers.updateWork)
  .delete("/:id", workControllers.deleteWork)

module.exports = router;
    