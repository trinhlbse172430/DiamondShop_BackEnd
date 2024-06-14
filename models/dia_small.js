"use strict";
module.exports = (sequelize, DataTypes) => {
	const DiamondSmall = sequelize.define(
		"DiamondSmall",
		{
			DiaSmallID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			DiaSmallPicture: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			DiaSmallWeight: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			DiaSmallUnit: {
				type: DataTypes.STRING(10),
			},
		},
		{
			tableName: "DiamondSmall",
			timestamps: false,
		},
	);
	return DiamondSmall;
};
