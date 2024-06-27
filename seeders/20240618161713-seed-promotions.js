"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Promotions",
			[
				{
					"PromotionID": "PRO001",
					"PromotionName": "ngày khai trương",
					"PromStartDate": "2024-06-11",
					"PromEndDate": "2024-06-29",
					"PromPercent": 10
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Promotions", null, {});
	},
};
