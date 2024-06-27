const { DiaColors } = require("../../models");

// Create a new DiaColors
exports.create = async (req, res) => {
    try {
        const diaColor = await DiaColors.create(req.body);
        res.status(201).json(diaColor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all DiaColors
exports.findAll = async (req, res) => {
    try {
        const diaColor = await DiaColors.findAll();
        res.json(diaColor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single DiaColors by ID
exports.findOne = async (req, res) => {
    try {
        const diaColor = await DiaColors.findByPk(req.params.id);
        if (diaColor) {
            res.json(diaColor);
        } else {
            res.status(404).json({ error: "DiaColors not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a DiaColors by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await DiaColors.update(req.body, {
            where: { DiaPriceID: req.params.id },
        });
        if (updated) {
            const updatedDiaPrice = await DiaColors.findByPk(req.params.id);
            res.json(updatedDiaPrice);
        } else {
            res.status(404).json({ error: "DiaColors not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a DiaColors by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await DiaColors.destroy({
            where: { DiaPriceID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "DiaColors not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
