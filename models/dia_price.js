"use strict";
module.exports = (sequelize, DataTypes) => {
	const DiaPrice = sequelize.define(
		"DiaPrice",
		{
			DiaPriceID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			DiaInputDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			DiaOrigin: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			DiaWeight: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			DiaUnit: {
				type: DataTypes.STRING(10),
				allowNull: false,
			},
			DiaColor: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			DiaClarity: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			DiaPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: DataTypes.STRING(10),
			},
		},
		{
			tableName: "DiaPrice",
			timestamps: false,
		},
	);
	return DiaPrice;
};
