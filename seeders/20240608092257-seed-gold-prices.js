"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"GoldPrice",
			[
				{
					GoldPriceID: "GP001",
					GoldInputDate: new Date("2003-06-04T07:00:00Z"),
					GoldAgeID: "GA01",
					GoldTypeID: "GT01",
					GoldWeight: 1.0,
					GoldUnit: "chỉ",
					GoldPrice: 10000000,
					Currency: "VND",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("GoldPrice", null, {});
	},
};
