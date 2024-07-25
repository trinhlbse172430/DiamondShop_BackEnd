const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment");

router.post("/payment", paymentController.create);

router.get("/payment", paymentController.findAll);

router.get("/payment/:id", paymentController.findOne);

router.put("/payment/:id", paymentController.update);

router.delete("/payment/:id", paymentController.delete);

module.exports = router;
