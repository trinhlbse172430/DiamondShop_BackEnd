const { Diamonds } = require("../../models");

// Create a new Diamonds
exports.create = async (req, res) => {
    try {
        const diamond = await Diamonds.create(req.body);
        res.status(201).json(diamond);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all Diamonds
exports.findAll = async (req, res) => {
    try {
        const diamond = await Diamonds.findAll();
        console.log(diamond);
        res.json(diamond);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single Diamonds by ID
exports.findOne = async (req, res) => {
    try {
        const diamond = await Diamonds.findByPk(req.params.id);
        if (diamond) {
            res.json(diamond);
        } else {
            res.status(404).json({ error: "Diamonds not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a Diamonds by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Diamonds.update(req.body, {
            where: { DiamondID: req.params.id },
        });
        if (updated) {
            const updatedDiamond = await Diamonds.findByPk(req.params.id);
            res.json(updatedDiamond);
        } else {
            res.status(404).json({ error: "Diamonds not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a Diamonds by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Diamonds.destroy({
            where: { DiamondID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "Diamonds not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
