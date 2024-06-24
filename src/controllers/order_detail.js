const { OrderDetail } = require("../../models");

// Create a new OrderDetail
exports.create = async (req, res) => {
	try {
		const orderDetail = await OrderDetail.create(req.body);
		res.status(201).json(orderDetail);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get all OrderDetails
exports.findAll = async (req, res) => {
	try {
		const orderDetail = await OrderDetail.findAll();
		res.json(orderDetail);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get a single OrderDetail by ID
exports.findOne = async (req, res) => {
	try {
		const orderDetail = await OrderDetail.findByPk(req.params.id);
		if (orderDetail) {
			res.json(orderDetail);
		} else {
			res.status(404).json({ error: "OrderDetail not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Update a OrderDetail by ID
exports.update = async (req, res) => {
	try {
		const [updated] = await OrderDetail.update(req.body, {
			where: { OrderDetailID: req.params.id },
		});
		if (updated) {
			const updatedOrderDetail = await OrderDetail.findByPk(req.params.id);
			res.json(updatedOrderDetail);
		} else {
			res.status(404).json({ error: "OrderDetail not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Delete a OrderDetail by ID
exports.delete = async (req, res) => {
	try {
		const deleted = await OrderDetail.destroy({
			where: { OrderDetailID: req.params.id },
		});
		if (deleted) {
			res.status(204).json();
		} else {
			res.status(404).json({ error: "OrderDetail not found" });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};