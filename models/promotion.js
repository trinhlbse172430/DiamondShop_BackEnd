"use strict";
module.exports = (sequelize, DataTypes) => {
	const Promotion = sequelize.define(
		"Promotions",
		{
			PromotionID: {
				type: DataTypes.STRING(20),
				primaryKey: true,
			},
			PromotionName: {
				type: DataTypes.STRING(30),
				allowNull: false,
			},
			PromStartDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			PromEndDate: {
				type: DataTypes.DATE,
			},
			PromPercent: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
		},
		{
			tableName: "Promotions",
			timestamps: false,
		},
	);
	return Promotion;
};
