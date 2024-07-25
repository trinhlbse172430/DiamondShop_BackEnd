"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Roles",
			[
				{
					"RoleID": "ROL001",
					"RoleName": "Admin",
					"EmployeeID": "EMP001",
					"FunctionID": "1"
				},
				{
					"RoleID": "ROL002",
					"RoleName": "Sale",
					"EmployeeID": "EMP002",
					"FunctionID": "3"
				},
				{
					"RoleID": "ROL003",
					"RoleName": "Sale",
					"EmployeeID": "EMP003",
					"FunctionID": "3"
				},
				{
					"RoleID": "ROL004",
					"RoleName": "Delivery",
					"EmployeeID": "EMP004",
					"FunctionID": "4"
				},
				{
					"RoleID": "ROL005",
					"RoleName": "Delivery",
					"EmployeeID": "EMP005",
					"FunctionID": "4"
				},
				{
					"RoleID": "ROL006",
					"RoleName": "Delivery",
					"EmployeeID": "EMP006",
					"FunctionID": "4"
				},
				{
					"RoleID": "ROL007",
					"RoleName": "Delivery",
					"EmployeeID": "EMP007",
					"FunctionID": "4"
				},
				{
					"RoleID": "ROL008",
					"RoleName": "Manager",
					"EmployeeID": "EMP008",
					"FunctionID": "2"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Roles", null, {});
	},
};
