const express = require("express");
const router = express.Router();
const bonusPointController = require("../controllers/bonus_point");

router.post("/bonus_point", bonusPointController.create);

router.get("/bonus_point", bonusPointController.findAll);

router.get("/bonus_point/:id", bonusPointController.findOne);

router.put("/bonus_point/:id", bonusPointController.update);

router.delete("/bonus_point/:id", bonusPointController.delete);

module.exports = router;
