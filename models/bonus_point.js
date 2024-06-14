"use strict";
module.exports = (sequelize, DataTypes) => {
	const BonusPoint = sequelize.define(
		"BonusPoint",
		{
			BonusPointID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			StartDisDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			EndDisDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			MinPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			MaxPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			Point: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			tableName: "BonusPoint",
			timestamps: false,
		},
	);
	return BonusPoint;
};
