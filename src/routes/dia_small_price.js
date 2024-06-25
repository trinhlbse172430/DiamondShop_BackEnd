const express = require("express");
const router = express.Router();
const diaSmallPriceController = require("../controllers/dia_small_price");

router.post("/dia_small_price", diaSmallPriceController.create);

router.get("/dia_small_price", diaSmallPriceController.findAll);

router.get("/dia_small_price/:id", diaSmallPriceController.findOne);

router.put("/dia_small_price/:id", diaSmallPriceController.update);

router.delete("/dia_small_price/:id", diaSmallPriceController.delete);

module.exports = router;
