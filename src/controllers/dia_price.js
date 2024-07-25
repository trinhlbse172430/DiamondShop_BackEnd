const { DiaPrices } = require("../../models");

// Create a new DiaPrices
exports.create = async (req, res) => {
    try {
        const diaPrice = await DiaPrices.create(req.body);
        res.status(201).json(diaPrice);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all DiaPrices
exports.findAll = async (req, res) => {
    try {
        const diaPrice = await DiaPrices.findAll();
        res.json(diaPrice);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single DiaPrices by ID
exports.findOne = async (req, res) => {
    try {
        const diaPrice = await DiaPrices.findByPk(req.params.id);
        if (diaPrice) {
            res.json(diaPrice);
        } else {
            res.status(404).json({ error: "DiaPrices not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a DiaPrices by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await DiaPrices.update(req.body, {
            where: { DiaPriceID: req.params.id },
        });
        if (updated) {
            const updatedDiaPrice = await DiaPrices.findByPk(req.params.id);
            res.json(updatedDiaPrice);
        } else {
            res.status(404).json({ error: "DiaPrices not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a DiaPrices by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await DiaPrices.destroy({
            where: { DiaPriceID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "DiaPrices not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
