const express = require("express");
const router = express.Router();
const diaOriginController = require("../controllers/dia_origin");

router.post("/dia_origin", diaOriginController.create);

router.get("/dia_origin", diaOriginController.findAll);

router.get("/dia_origin/:id", diaOriginController.findOne);

router.put("/dia_origin/:id", diaOriginController.update);

router.delete("/dia_origin/:id", diaOriginController.delete);

module.exports = router;
