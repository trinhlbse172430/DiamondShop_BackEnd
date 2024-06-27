const express = require("express");
const router = express.Router();
const diaColorController = require("../controllers/dia_color");

router.post("/dia_color", diaColorController.create);

router.get("/dia_color", diaColorController.findAll);

router.get("/dia_color/:id", diaColorController.findOne);

router.put("/dia_color/:id", diaColorController.update);

router.delete("/dia_color/:id", diaColorController.delete);

module.exports = router;
