const { DiaClarities } = require("../../models");

// Create a new DiaClarities
exports.create = async (req, res) => {
    try {
        const diaClarity = await DiaClarities.create(req.body);
        res.status(201).json(diaClarity);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all DiaClarities
exports.findAll = async (req, res) => {
    try {
        const diaClarity = await DiaClarities.findAll();
        res.json(diaClarity);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single DiaClarities by ID
exports.findOne = async (req, res) => {
    try {
        const diaClarity = await DiaClarities.findByPk(req.params.id);
        if (diaClarity) {
            res.json(diaClarity);
        } else {
            res.status(404).json({ error: "DiaClarities not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a DiaClarities by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await DiaClarities.update(req.body, {
            where: { DiaPriceID: req.params.id },
        });
        if (updated) {
            const updatedDiaPrice = await DiaClarities.findByPk(req.params.id);
            res.json(updatedDiaPrice);
        } else {
            res.status(404).json({ error: "DiaClarities not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a DiaClarities by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await DiaClarities.destroy({
            where: { DiaPriceID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "DiaClarities not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
