"use strict";
module.exports = (sequelize, DataTypes) => {
	const OrderDetail = sequelize.define(
		"OrderDetails",
		{
			OrderDetailID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			OrderID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			ProductID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			Quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			GoldPriceID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			DiaPriceID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			DiaSmallPriceID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			SalePrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: DataTypes.STRING(10),
			},
			CusSize: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
		},
		{
			tableName: "OrderDetails",
			timestamps: false,
		},
	);

	return OrderDetail;
};
