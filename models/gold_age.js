"use strict";
module.exports = (sequelize, DataTypes) => {
	const GoldAge = sequelize.define(
		"GoldAges",
		{
			GoldAgeID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			GoldAgeName: {
				type: DataTypes.STRING(30),
				allowNull: false,
			},
		},
		{
			tableName: "GoldAges",
			timestamps: false,
		},
	);
	return GoldAge;
};
