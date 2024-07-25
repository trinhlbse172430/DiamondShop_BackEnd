"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaClarities",
			[
				{
					"DiaClarityID": "IF",
					"DiaClarityName": "Hoàn hảo"
				},
				{
					"DiaClarityID": "VS1",
					"DiaClarityName": "Rất ít tạp chất"
				},
				{
					"DiaClarityID": "VS2",
					"DiaClarityName": "Rất ít tạp chất"
				},
				{
					"DiaClarityID": "VVS1",
					"DiaClarityName": "Rất rất ít tạp chất"
				},
				{
					"DiaClarityID": "VVS2",
					"DiaClarityName": "Rất rất ít tạp chất"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaClaritys", null, {});
	},
};
