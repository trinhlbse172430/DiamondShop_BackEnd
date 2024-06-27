const { Customer } = require("../../models");

// Create a new Customer
exports.create = async (req, res) => {
	try {
		const customer = await Customer.create(req.body);
		res.status(201).json(customer);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get all Customers
exports.findAll = async (req, res) => {
	try {
		const customer = await Customer.findAll();
		res.json(customer);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get a single Customer by ID
exports.findOne = async (req, res) => {
	try {
		const customer = await Customer.findByPk(req.params.id);
		if (customer) {
			res.json(customer);
		} else {
			res.status(404).json({ error: "Customer not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Update a Customer by ID
exports.update = async (req, res) => {
	try {
		const [updated] = await Customer.update(req.body, {
			where: { CustomerID: req.params.id },
		});
		if (updated) {
			const updatedCustomer = await Customer.findByPk(req.params.id);
			res.json(updatedCustomer);
		} else {
			res.status(404).json({ error: "Customer not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Delete a Customer by ID
exports.delete = async (req, res) => {
	try {
		const deleted = await Customer.destroy({
			where: { CustomerID: req.params.id },
		});
		if (deleted) {
			res.status(204).json();
		} else {
			res.status(404).json({ error: "Customer not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
