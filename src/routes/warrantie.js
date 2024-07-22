const express = require("express");
const router = express.Router();
const warrantieController = require("../controllers/warrantie");

router.post("/warrantie", warrantieController.create);

router.get("/warrantie", warrantieController.findAll);

router.get("/warrantie/:id", warrantieController.findOne);

router.put("/warrantie/:id", warrantieController.update);

router.delete("/warrantie/:id", warrantieController.delete);

module.exports = router;