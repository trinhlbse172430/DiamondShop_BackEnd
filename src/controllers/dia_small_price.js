const { DiaSmallPrices } = require("../../models");

// Create a new DiaSmallPrices
exports.create = async (req, res) => {
    try {
        const diaSmallPrice = await DiaSmallPrices.create(req.body);
        res.status(201).json(diaSmallPrice);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all DiaSmallPrices
exports.findAll = async (req, res) => {
    try {
        const diaSmallPrice = await DiaSmallPrices.findAll();
        res.json(diaSmallPrice);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single DiaSmallPrices by ID
exports.findOne = async (req, res) => {
    try {
        const diaSmallPrice = await DiaSmallPrices.findByPk(req.params.id);
        if (diaSmallPrice) {
            res.json(diaSmallPrice);
        } else {
            res.status(404).json({ error: "DiaSmallPrices not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a DiaSmallPrices by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await DiaSmallPrices.update(req.body, {
            where: { DiaSmallPriceID: req.params.id },
        });
        if (updated) {
            const updatedDiaSmallPrice = await DiaSmallPrices.findByPk(req.params.id);
            res.json(updatedDiaSmallPrice);
        } else {
            res.status(404).json({ error: "DiaSmallPrices not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a DiaSmallPrices by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await DiaSmallPrices.destroy({
            where: { DiaSmallPriceID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "DiaSmallPrices not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
