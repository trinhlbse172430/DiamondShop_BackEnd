const { Golds } = require("../../models");

// Create a new Golds
exports.create = async (req, res) => {
    try {
        const gold = await Golds.create(req.body);
        res.status(201).json(gold);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all Golds
exports.findAll = async (req, res) => {
    try {
        const { goldTypeID, goldAgeID } = req.query;
        const where = {};

        if (goldTypeID) where.GoldTypeID = goldTypeID;
        if (goldAgeID) where.GoldAgeID = goldAgeID;

        const golds = await Golds.findAll({ where });
        res.json(golds);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single Golds by ID
exports.findOne = async (req, res) => {
    try {
        const gold = await Golds.findByPk(req.params.id);
        if (gold) {
            res.json(gold);
        } else {
            res.status(404).json({ error: "Golds not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a Golds by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Golds.update(req.body, {
            where: { GoldID: req.params.id },
        });
        if (updated) {
            const updatedGold = await Golds.findByPk(req.params.id);
            res.json(updatedGold);
        } else {
            res.status(404).json({ error: "Golds not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a Golds by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Golds.destroy({
            where: { GoldID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "Golds not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
