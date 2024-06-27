"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GoldPrices",
			[
				{
					"GoldPriceID": "TRANG14K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "100000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG14K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "120000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY18K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "18K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "110000.00",
					"Currency": "VND"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("GoldPrices", null, {});
	},
};
