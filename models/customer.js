"use strict";
module.exports = (sequelize, DataTypes) => {
	const Customer = sequelize.define(
		"Customer",
		{
			CustomerID: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
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
			CusPoint: {
				type: DataTypes.INTEGER,
			},
		},
		{
			tableName: "Customer",
			timestamps: false,
		},
	);
	return Customer;
};
