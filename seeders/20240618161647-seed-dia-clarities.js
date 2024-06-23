"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaClarities",
			[
				{
					DiaClarityID: "DC01",
					DiaClarityName: "FL",
				},
				{
					DiaClarityID: "DC02",
					DiaClarityName: "IF",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaClaritys", null, {});
	},
};
