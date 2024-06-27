const express = require("express");
const router = express.Router();
const diaClarityController = require("../controllers/dia_clarity");

router.post("/dia_clarity", diaClarityController.create);

router.get("/dia_clarity", diaClarityController.findAll);

router.get("/dia_clarity/:id", diaClarityController.findOne);

router.put("/dia_clarity/:id", diaClarityController.update);

router.delete("/dia_clarity/:id", diaClarityController.delete);

module.exports = router;
