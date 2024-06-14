"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Role",
			[
				{
					RoleID: "ROLE001",
					RoleName: "Admin",
					EmployeeID: "EMP001",
				},
				{
					RoleID: "ROLE002",
					RoleName: "Sales Staff",
					EmployeeID: "EMP002",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Role", null, {});
	},
};
