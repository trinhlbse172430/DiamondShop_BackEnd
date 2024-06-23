"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaSmallPrices",
			[
				{
					DiaSmallPriceID: "DSP01",
					DiaSmallInputDate: "2024-06-18",
					DiaSmallOriginID: "DO01",
					DiaSmallWeight: 0.5,
					DiaSmallUnit: "ct",
					DiaSmallColorID: "DC01",
					DiaSmallPrice: 8000000.0,
					Currency: "VND",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaSmallPrices", null, {});
	},
};
