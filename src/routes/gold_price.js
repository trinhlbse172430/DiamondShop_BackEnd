const express = require("express");
const router = express.Router();
const goldPriceController = require("../controllers/gold_price");

router.post("/gold_price", goldPriceController.create);

router.get("/gold_price", goldPriceController.findAll);

router.get("/gold_price/:id", goldPriceController.findOne);

router.put("/gold_price/:id", goldPriceController.update);

router.delete("/gold_price/:id", goldPriceController.delete);

module.exports = router;
