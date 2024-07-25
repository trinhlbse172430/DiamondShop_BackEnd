"use strict";
module.exports = (sequelize, DataTypes) => {
	const Customer = sequelize.define(
		"Customers",
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
			CusPoint: {
				type: DataTypes.INTEGER,
			},
			CusPassword: {
				type: DataTypes.STRING(40),
				allowNull: false,
			},
			CusUsername: {
				type: DataTypes.STRING(40),
				allowNull: false,
			},
			CusEmail: {
				type: DataTypes.STRING(40),
				allowNull: false,
			},
		},
		{
			tableName: "Customers",
			timestamps: false,
		},
	);
	return Customer;
};
