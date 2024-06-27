const { DiaOrigins } = require("../../models");

// Create a new DiaOrigins
exports.create = async (req, res) => {
    try {
        const diaOrigin = await DiaOrigins.create(req.body);
        res.status(201).json(diaOrigin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all DiaOrigins
exports.findAll = async (req, res) => {
    try {
        const diaOrigin = await DiaOrigins.findAll();
        res.json(diaOrigin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single DiaOrigins by ID
exports.findOne = async (req, res) => {
    try {
        const diaOrigin = await DiaOrigins.findByPk(req.params.id);
        if (diaOrigin) {
            res.json(diaOrigin);
        } else {
            res.status(404).json({ error: "DiaOrigins not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a DiaOrigins by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await DiaOrigins.update(req.body, {
            where: { DiaPriceID: req.params.id },
        });
        if (updated) {
            const updatedDiaPrice = await DiaOrigins.findByPk(req.params.id);
            res.json(updatedDiaPrice);
        } else {
            res.status(404).json({ error: "DiaOrigins not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a DiaOrigins by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await DiaOrigins.destroy({
            where: { DiaPriceID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "DiaOrigins not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
