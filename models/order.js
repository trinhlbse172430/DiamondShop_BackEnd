"use strict";
module.exports = (sequelize, DataTypes) => {
	const Orders = sequelize.define(
		"Orders",
		{
			OrderID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			SaleDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			CusPhone: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			CusName: {
				type: DataTypes.STRING(40),
				allowNull: false,
			},
			CusAddress: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},

			TotalDetailPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			DiscountPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			TotalPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			ShipPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: DataTypes.STRING(10),
			},
			BonusPointID: {
				type: DataTypes.CHAR(10),
			},
			OrderPoint: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			PromotionID: {
				type: DataTypes.STRING(10),
			},
			CustomerID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			EmployeeIDShip: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			OrdNote: {
				type: DataTypes.STRING(400),
			},
			OrdStatus: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
		},
		{
			tableName: "Orders",
			timestamps: false,
		},
	);

	return Orders;
};
