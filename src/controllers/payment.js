const { Payments } = require("../../models");

// Create a new Payments
exports.create = async (req, res) => {
	try {
		const payment = await Payments.create(req.body);
		res.status(201).json(payment);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get all Payments
exports.findAll = async (req, res) => {
	try {
		const payment = await Payments.findAll();
		res.json(payment);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get a single Payments by ID
exports.findOne = async (req, res) => {
	try {
		const payment = await Payments.findByPk(req.params.id);
		if (payment) {
			res.json(payment);
		} else {
			res.status(404).json({ error: "Payments not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Update a Payments by ID
exports.update = async (req, res) => {
	try {
		const [updated] = await Payments.update(req.body, {
			where: { PaymentID: req.params.id },
		});
		if (updated) {
			const updatedPayment = await Payments.findByPk(req.params.id);
			res.json(updatedPayment);
		} else {
			res.status(404).json({ error: "Payments not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Delete a Payments by ID
exports.delete = async (req, res) => {
	try {
		const deleted = await Payments.destroy({
			where: { PaymentID: req.params.id },
		});
		if (deleted) {
			res.status(204).json();
		} else {
			res.status(404).json({ error: "Payments not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
