const { GoldTypes } = require("../../models");

// Create a new GoldTypes
exports.create = async (req, res) => {
    try {
        const goldType = await GoldTypes.create(req.body);
        res.status(201).json(goldType);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all GoldTypes
exports.findAll = async (req, res) => {
    try {
        const goldTypes = await GoldTypes.findAll();
        res.json(goldTypes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single GoldTypes by ID
exports.findOne = async (req, res) => {
    try {
        const goldType = await GoldTypes.findByPk(req.params.id);
        if (goldType) {
            res.json(goldType);
        } else {
            res.status(404).json({ error: "GoldTypes not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a GoldTypes by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await GoldTypes.update(req.body, {
            where: { GoldTypeID: req.params.id },
        });
        if (updated) {
            const updatedGoldType = await GoldTypes.findByPk(req.params.id);
            res.json(updatedGoldType);
        } else {
            res.status(404).json({ error: "GoldTypes not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a GoldTypes by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await GoldTypes.destroy({
            where: { GoldTypeID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "GoldTypes not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
