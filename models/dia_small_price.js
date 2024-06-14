"use strict";
module.exports = (sequelize, DataTypes) => {
	const DiaSmallPrice = sequelize.define(
		"DiaSmallPrice",
		{
			DiaSmallPriceID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			DiaSmallInputDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			DiaSmallOrigin: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			DiaSmallWeight: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			DiaSmallUnit: {
				type: DataTypes.STRING(10),
			},
			DiaSmallColor: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			DiaSmallPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: DataTypes.STRING(10),
			},
		},
		{
			tableName: "DiaSmallPrice",
			timestamps: false,
		},
	);
	return DiaSmallPrice;
};
