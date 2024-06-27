const { DiamondSmalls } = require("../../models");

// Create a new DiamondSmalls
exports.create = async (req, res) => {
    try {
        const diamondSmall = await DiamondSmalls.create(req.body);
        res.status(201).json(diamondSmall);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all DiamondSmalls
exports.findAll = async (req, res) => {
    try {
        const diamondSmall = await DiamondSmalls.findAll();
        res.json(diamondSmall);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single DiamondSmalls by ID
exports.findOne = async (req, res) => {
    try {
        const diamondSmall = await DiamondSmalls.findByPk(req.params.id);
        if (diamondSmall) {
            res.json(diamondSmall);
        } else {
            res.status(404).json({ error: "DiamondSmalls not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a DiamondSmalls by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await DiamondSmalls.update(req.body, {
            where: { DiamondSmallID: req.params.id },
        });
        if (updated) {
            const updatedDiamondSmall = await DiamondSmalls.findByPk(req.params.id);
            res.json(updatedDiamondSmall);
        } else {
            res.status(404).json({ error: "DiamondSmalls not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a DiamondSmalls by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await DiamondSmalls.destroy({
            where: { DiaSmallID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "DiamondSmalls not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
