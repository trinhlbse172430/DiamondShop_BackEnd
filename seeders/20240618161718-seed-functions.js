"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Functions",
			[
				{
					FunctionID: "F01",
					FunctionName: "View Orders",
				},
				{
					FunctionID: "F02",
					FunctionName: "Manage Products",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Functions", null, {});
	},
};
