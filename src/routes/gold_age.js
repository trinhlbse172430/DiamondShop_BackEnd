const express = require("express");
const router = express.Router();
const goldAgeController = require("../controllers/gold_age");

router.post("/gold_age", goldAgeController.create);

router.get("/gold_age", goldAgeController.findAll);

router.get("/gold_age/:id", goldAgeController.findOne);

router.put("/gold_age/:id", goldAgeController.update);

router.delete("/gold_age/:id", goldAgeController.delete);

module.exports = router;
