const express = require("express");
const router = express.Router();
const diaPriceController = require("../controllers/dia_price");

router.post("/dia_price", diaPriceController.create);

router.get("/dia_price", diaPriceController.findAll);

router.get("/dia_price/:id", diaPriceController.findOne);

router.put("/dia_price/:id", diaPriceController.update);

router.delete("/dia_price/:id", diaPriceController.delete);

module.exports = router;
