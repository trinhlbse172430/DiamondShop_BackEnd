"use strict";
module.exports = (sequelize, DataTypes) => {
	const Employee = sequelize.define(
		"Employee",
		{
			EmployeeID: {
				type: DataTypes.CHAR(10),
				primaryKey: true,
			},
			EmpName: {
				type: DataTypes.STRING(40),
				allowNull: false,
			},
			EmpAddress: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			EmpPhone: {
				type: DataTypes.STRING(10),
				allowNull: false,
			},
			EmpBirth: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			EmpGmail: {
				type: DataTypes.STRING(30),
				allowNull: false,
			},
			EmpStatus: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			EmpNote: {
				type: DataTypes.STRING(200),
			},
		},
		{
			tableName: "Employee",
			timestamps: false,
		},
	);
	return Employee;
};
