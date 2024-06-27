"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaClarities",
			[
				{
					"DiaClarityID": "FL",
					"DiaClarityName": "Hoàn hảo"
				},
				{
					"DiaClarityID": "IF",
					"DiaClarityName": "Hoàn hảo"
				},
				{
					"DiaClarityID": "VS1",
					"DiaClarityName": "Rất ít tạp chât"
				},
				{
					"DiaClarityID": "VS2",
					"DiaClarityName": "Rất ít tạp chât"
				},
				{
					"DiaClarityID": "VVS1",
					"DiaClarityName": "Rất rất ít tạp chât"
				},
				{
					"DiaClarityID": "VVS2",
					"DiaClarityName": "Rất rất ít tạp chât"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaClaritys", null, {});
	},
};
