"use strict";
module.exports = (sequelize, DataTypes) => {
	const Role = sequelize.define(
		"Roles",
		{
			RoleID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			RoleName: {
				type: DataTypes.STRING(30),
				allowNull: false,
			},
			EmployeeID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			FunctionID: {
				type: DataTypes.CHAR(20),
				allowNull: false,
			},
		},
		{
			tableName: "Roles",
			timestamps: false,
		},
	);

	return Role;
};
