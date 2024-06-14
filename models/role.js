"use strict";
module.exports = (sequelize, DataTypes) => {
	const Role = sequelize.define(
		"Role",
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
		},
		{
			tableName: "Role",
			timestamps: false,
		},
	);

	return Role;
};
