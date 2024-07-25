const { Functions } = require("../../models");

// Create a new Functions
exports.create = async (req, res) => {
	try {
		const functionData = await Functions.create(req.body);
		res.status(201).json(functionData);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get all Functions
exports.findAll = async (req, res) => {
	try {
		const functionData = await Functions.findAll();
		res.json(functionData);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get a single Functions by ID
exports.findOne = async (req, res) => {
	try {
		const functionData = await Functions.findByPk(req.params.id);
		if (functionData) {
			res.json(functionData);
		} else {
			res.status(404).json({ error: "Functions not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Update a Functions by ID
exports.update = async (req, res) => {
	try {
		const [updated] = await Functions.update(req.body, {
			where: { DiaPriceID: req.params.id },
		});
		if (updated) {
			const updatedDiaPrice = await Functions.findByPk(req.params.id);
			res.json(updatedDiaPrice);
		} else {
			res.status(404).json({ error: "Functions not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Delete a Functions by ID
exports.delete = async (req, res) => {
	try {
		const deleted = await Functions.destroy({
			where: { DiaPriceID: req.params.id },
		});
		if (deleted) {
			res.status(204).json();
		} else {
			res.status(404).json({ error: "Functions not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
