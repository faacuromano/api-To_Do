const express = require('express');
const router = express.Router()
const clientController = require('../../controllers/clients.controller')

router
  .get("/", clientController.getAll)
  .get("/:id", clientController.getId)

module.exports = router