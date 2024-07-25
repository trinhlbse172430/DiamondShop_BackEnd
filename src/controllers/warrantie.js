const { Warranties } = require("../../models")

exports.create = async (req, res) => {
    try {
        const warrantie = await Warranties.create(req.body)
        res.status(201).json(warrantie)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.findAll = async (req, res) => {
    try {
        const warranties = await Warranties.findAll()
        res.json(warranties)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.findOne = async (req, res) => {
    try {
        const warrantie = await Warranties.findByPk(req.params.id)
        if (warrantie) {
            res.json(warrantie)
        } else {
            res.status(404).json({ error: "Warrantie not found" })
        }
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.update = async (req, res) => {
    try {
        const [updated] = await Warranties.update(req.body, {
            where: { WarrantieID: req.params.id },
        })
        if (updated) {
            const updatedWarrantie = await Warranties.findByPk(req.params.id)
            res.json(updatedWarrantie)
        } else {
            res.status(404).json({ error: "Warrantie not found" })
        }
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.delete = async (req, res) => {
    try {
        const deleted = await Warrantie.destroy({
            where: { WarrantieID: req.params.id },
        })
        if (deleted) {
            res.status(204).json()
        } else {
            res.status(404).json({ error: "Warrantie not found" })
        }
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}