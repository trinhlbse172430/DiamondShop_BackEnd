const express = require("express");
const router = express.Router();
const goldTypeController = require("../controllers/gold_type");

router.post("/gold_type", goldTypeController.create);

router.get("/gold_type", goldTypeController.findAll);

router.get("/gold_type/:id", goldTypeController.findOne);

router.put("/gold_type/:id", goldTypeController.update);

router.delete("/gold_type/:id", goldTypeController.delete);

module.exports = router;
