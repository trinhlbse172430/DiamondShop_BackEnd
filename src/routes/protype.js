const express = require("express");
const router = express.Router();
const protypeController = require("../controllers/protype");

router.post("/protype", protypeController.create);

router.get("/protype", protypeController.findAll);

router.get("/protype/:id", protypeController.findOne);

router.put("/protype/:id", protypeController.update);

router.delete("/protype/:id", protypeController.delete);

module.exports = router;
