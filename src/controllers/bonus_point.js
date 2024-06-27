const { BonusPoint } = require("../../models");

// Create a new BonusPoint
exports.create = async (req, res) => {
	try {
		const bonusPoint = await BonusPoint.create(req.body);
		res.status(201).json(bonusPoint);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get all BonusPoints
exports.findAll = async (req, res) => {
	try {
		const bonusPoint = await BonusPoint.findAll();
		res.json(bonusPoint);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get a single BonusPoint by ID
exports.findOne = async (req, res) => {
	try {
		const bonusPoint = await BonusPoint.findByPk(req.params.id);
		if (bonusPoint) {
			res.json(bonusPoint);
		} else {
			res.status(404).json({ error: "BonusPoint not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Update a BonusPoint by ID
exports.update = async (req, res) => {
	try {
		const [updated] = await BonusPoint.update(req.body, {
			where: { BonusPointID: req.params.id },
		});
		if (updated) {
			const updatedBonusPoint = await BonusPoint.findByPk(req.params.id);
			res.json(updatedBonusPoint);
		} else {
			res.status(404).json({ error: "BonusPoint not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Delete a BonusPoint by ID
exports.delete = async (req, res) => {
	try {
		const deleted = await BonusPoint.destroy({
			where: { BonusPointID: req.params.id },
		});
		if (deleted) {
			res.status(204).json();
		} else {
			res.status(404).json({ error: "BonusPoint not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
