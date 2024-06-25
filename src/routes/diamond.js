const express = require("express");
const router = express.Router();
const diamondController = require("../controllers/diamond");

router.post("/diamond", diamondController.create);

router.get("/diamond", diamondController.findAll);

router.get("/diamond/:id", diamondController.findOne);

router.put("/diamond/:id", diamondController.update);

router.delete("/diamond/:id", diamondController.delete);

module.exports = router;
