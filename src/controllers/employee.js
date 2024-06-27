const { Employee } = require("../../models");

// Create a new Employee
exports.create = async (req, res) => {
	try {
		const employee = await Employee.create(req.body);
		res.status(201).json(employee);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get all Employees
exports.findAll = async (req, res) => {
	try {
		const employee = await Employee.findAll();
		res.json(employee);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get a single Employee by ID
exports.findOne = async (req, res) => {
	try {
		const employee = await Employee.findByPk(req.params.id);
		if (employee) {
			res.json(employee);
		} else {
			res.status(404).json({ error: "Employee not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Update a Employee by ID
exports.update = async (req, res) => {
	try {
		const [updated] = await Employee.update(req.body, {
			where: { EmployeeID: req.params.id },
		});
		if (updated) {
			const updatedEmployee = await Employee.findByPk(req.params.id);
			res.json(updatedEmployee);
		} else {
			res.status(404).json({ error: "Employee not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Delete a Employee by ID
exports.delete = async (req, res) => {
	try {
		const deleted = await Employee.destroy({
			where: { EmployeeID: req.params.id },
		});
		if (deleted) {
			res.status(204).json();
		} else {
			res.status(404).json({ error: "Employee not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
