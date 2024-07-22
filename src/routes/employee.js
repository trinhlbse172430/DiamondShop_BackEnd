const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee");

router.post("/employee", employeeController.create);

router.post("/employee/login", employeeController.login);

router.get("/employee", employeeController.findAll);

router.get("/employee/:id", employeeController.findOne);

router.put("/employee/:id", employeeController.update);

router.delete("/employee/:id", employeeController.delete);

module.exports = router;