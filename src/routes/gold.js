const express = require("express");
const router = express.Router();
const goldController = require("../controllers/gold");

router.post("/gold", goldController.create);

router.get("/gold", goldController.findAll);

router.get("/gold/:id", goldController.findOne);

router.put("/gold/:id", goldController.update);

router.delete("/gold/:id", goldController.delete);

module.exports = router;
