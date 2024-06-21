"use strict";
module.exports = (sequelize, DataTypes) => {
	const GIAList = sequelize.define(
		"GIAList",
		{
			GIAID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			GIAPicture: {
				type: DataTypes.TEXT,
			},
			Origin: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			Weight: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			DiaUnit: {
				type: DataTypes.STRING(10),
			},
			Color: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			Clarity: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			Cut: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
		},
		{
			tableName: "GIAList",
			timestamps: false,
		},
	);
	return GIAList;
};
