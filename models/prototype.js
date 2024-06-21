"use strict";
module.exports = (sequelize, DataTypes) => {
	const ProType = sequelize.define(
		"ProTypes",
		{
			ProTypeID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			ProTypeName: {
				type: DataTypes.STRING(30),
				allowNull: false,
			},
		},
		{
			tableName: "ProTypes",
			timestamps: false,
		},
	);
	return ProType;
};
