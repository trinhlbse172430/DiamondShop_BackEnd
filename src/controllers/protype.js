const { ProTypes } = require("../../models");

exports.create = async (req, res) => {
    try {
        const protype = await ProTypes.create(req.body);
        res.status(201).json(protype);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const protypes = await ProTypes.findAll();
        res.json(protypes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const protype = await ProTypes.findByPk(req.params.id);
        if (protype) {
            res.json(protype);
        } else {
            res.status(404).json({ error: "ProTypes not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await ProTypes.update(req.body, {
            where: { ProTypeID: req.params.id },
        });
        if (updated) {
            const updatedProType = await ProTypes.findByPk(req.params.id);
            res.json(updatedProType);
        } else {
            res.status(404).json({ error: "ProTypes not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await ProTypes.destroy({
            where: { ProTypeID: req.params.id },
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: "ProTypes not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
