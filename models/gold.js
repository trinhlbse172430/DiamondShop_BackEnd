"use strict";
module.exports = (sequelize, DataTypes) => {
	const Gold = sequelize.define(
		"Golds",
		{
			GoldID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			GoldPicture: {
				type: DataTypes.TEXT,
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
		},
		{
			tableName: "Golds",
			timestamps: false,
		},
	);
	
	return Gold;
};
