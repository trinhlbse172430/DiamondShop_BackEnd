"use strict";
module.exports = (sequelize, DataTypes) => {
	const GoldPrice = sequelize.define(
		"GoldPrices",
		{
			GoldPriceID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			GoldInputDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			GoldTypeID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			GoldAgeID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			GoldWeight: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			GoldUnit: {
				type: DataTypes.STRING(10),
			},
			GoldPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: DataTypes.STRING(10),
			},
		},
		{
			tableName: "GoldPrices",
			timestamps: false,
		},
	);

	return GoldPrice;
};
