"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GoldPrices",
			[
				{
					GoldPriceID: "GP01",
					GoldInputDate: "2024-06-18",
					GoldTypeID: "GT01",
					GoldAgeID: "GA01",
					GoldWeight: 1.0,
					GoldUnit: "chi",
					GoldPrice: 10000000.0,
					Currency: "VND",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("GoldPrices", null, {});
	},
};
