const express = require("express");
const router = express.Router();
const orderDetailController = require("../controllers/order_detail");

router.post("/order_detail", orderDetailController.create);

router.get("/order_detail", orderDetailController.findAll);

router.get("/order_detail/:id", orderDetailController.findOne);

router.put("/order_detail/:id", orderDetailController.update);

router.delete("/order_detail/:id", orderDetailController.delete);

module.exports = router;
