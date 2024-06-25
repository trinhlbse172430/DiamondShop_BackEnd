const express = require("express");
const router = express.Router();
const diamondSmallController = require("../controllers/diamond_small");

router.post("/diamond_small", diamondSmallController.create);

router.get("/diamond_small", diamondSmallController.findAll);

router.get("/diamond_small/:id", diamondSmallController.findOne);

router.put("/diamond_small/:id", diamondSmallController.update);

router.delete("/diamond_small/:id", diamondSmallController.delete);

module.exports = router;
