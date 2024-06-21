"use strict";
module.exports = (sequelize, DataTypes) => {
	const GoldType = sequelize.define(
		"GoldTypes",
		{
			GoldTypeID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			GoldTypeName: {
				type: DataTypes.STRING(30),
				allowNull: false,
			},
		},
		{
			tableName: "GoldTypes",
			timestamps: false,
		},
	);
	return GoldType;
};
