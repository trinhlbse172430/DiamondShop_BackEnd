"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaSmallPrices",
			[
				{
					"DiaSmallPriceID": "NATD2LY",
					"DiaSmallInputDate": "2024-06-10",
					"DiaSmallOriginID": "NAT",
					"DiaSmallWeight": 1,
					"DiaSmallUnit": "Ly",
					"DiaSmallColorID": "D",
					"DiaSmallPrice": "500000.00",
					"Currency": "VND"
				},
				{
					"DiaSmallPriceID": "PEOF14LY",
					"DiaSmallInputDate": "2024-06-10",
					"DiaSmallOriginID": "PEO",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallColorID": "F",
					"DiaSmallPrice": "600000.00",
					"Currency": "VND"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaSmallPrices", null, {});
	},
};
