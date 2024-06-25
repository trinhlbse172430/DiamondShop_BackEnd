const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer");

router.post("/customer", customerController.create);

router.get("/customer", customerController.findAll);

router.get("/customer/:id", customerController.findOne);

router.put("/customer/:id", customerController.update);

router.delete("/customer/:id", customerController.delete);

module.exports = router;
