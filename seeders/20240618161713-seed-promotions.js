"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Promotions",
			[
				{
					"PromotionID": "PRO001",
					"PromotionName": "ngày khai trương",
					"PromStartDate": "2024-05-06",
					"PromEndDate": "2024-07-31",
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
