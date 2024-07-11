const express = require("express");
const router = express.Router();
const functionController = require("../controllers/function");

router.post("/function", functionController.create);

router.get("/function", functionController.findAll);

router.get("/function/:id", functionController.findOne);

router.put("/function/:id", functionController.update);

router.delete("/function/:id", functionController.delete);

module.exports = router;
