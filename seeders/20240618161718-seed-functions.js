"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Functions",
			[
				{
					"FunctionID": "1",
					"FunctionName": "admin"
				},
				{
					"FunctionID": "2",
					"FunctionName": "manager"
				},
				{
					"FunctionID": "3",
					"FunctionName": "sale"
				},
				{
					"FunctionID": "4",
					"FunctionName": "delivery"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Functions", null, {});
	},
};
