const { GoldAges } = require("../../models");

exports.create = async (req, res) => {
    try {
        const goldAge = await GoldAges.create(req.body);
        res.status(201).json(goldAge);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const goldAges = await GoldAges.findAll();
        res.json(goldAges);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const goldAge = await GoldAges.findByPk(req.params.id);
        if (goldAge) {
            res.json(goldAge);
        } else {
            res.status(404).json({ error: "GoldAges not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await GoldAges.update(req.body, {
            where: { GoldAgeID: req.params.id },
        });
        if (updated) {
            const updatedGoldAge = await GoldAges.findByPk(req.params.id);
            res.json(updatedGoldAge);
        } else {
            res.status(404).json({ error: "GoldAges not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await GoldAges.destroy({
            where: { GoldAgeID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "GoldAges not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
