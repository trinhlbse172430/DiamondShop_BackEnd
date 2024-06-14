"use strict";
module.exports = (sequelize, DataTypes) => {
	const Diamond = sequelize.define(
		"Diamond",
		{
			DiamondID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			GIAID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
				unique: true,
			},
			DiaPicture: {
				type: DataTypes.TEXT,
			},
		},
		{
			tableName: "Diamond",
			timestamps: false,
		},
	);

	return Diamond;
};
