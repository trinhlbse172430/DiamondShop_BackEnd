"use strict";
module.exports = (sequelize, DataTypes) => {
	const OrderDetail = sequelize.define(
		"OrderDetail",
		{
			OrderDetailID: {
				type: DataTypes.CHAR(20),
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
			PriceID: {
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
		},
		{
			tableName: "OrderDetail",
			timestamps: false,
		},
	);

	return OrderDetail;
};
