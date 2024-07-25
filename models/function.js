"use strict";
module.exports = (sequelize, DataTypes) => {
	const Function = sequelize.define(
		"Functions",
		{
			FunctionID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			FunctionName: {
				type: DataTypes.STRING(30),
				allowNull: false,
			},
		},
		{
			tableName: "Functions",
			timestamps: false,
		},
	);
	return Function;
};
