"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaSmallPrices",
			[	
				//NATD
				{
					"DiaSmallPriceID": "NATD02",
					"DiaSmallInputDate": "2024-07-11",
					"DiaSmallOriginID": "NAT",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallColorID": "D",
					"DiaSmallPrice": "1000000.00",
					"Currency": "VND"
				},
				{
					"DiaSmallPriceID": "NATD01",
					"DiaSmallInputDate": "2024-07-11",
					"DiaSmallOriginID": "NAT",
					"DiaSmallWeight": 1,
					"DiaSmallUnit": "Ly",
					"DiaSmallColorID": "D",
					"DiaSmallPrice": "500000.00",
					"Currency": "VND"
				},

				//NATE
				{
					"DiaSmallPriceID": "NATE02",
					"DiaSmallInputDate": "2024-07-11",
					"DiaSmallOriginID": "NAT",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallColorID": "E",
					"DiaSmallPrice": "1000000.00",
					"Currency": "VND"
				},
				{
					"DiaSmallPriceID": "NATE01",
					"DiaSmallInputDate": "2024-07-11",
					"DiaSmallOriginID": "NAT",
					"DiaSmallWeight": 1,
					"DiaSmallUnit": "Ly",
					"DiaSmallColorID": "E",
					"DiaSmallPrice": "500000.00",
					"Currency": "VND"
				},

				//NATF
				{
					"DiaSmallPriceID": "NATF02",
					"DiaSmallInputDate": "2024-07-11",
					"DiaSmallOriginID": "NAT",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallColorID": "F",
					"DiaSmallPrice": "1000000.00",
					"Currency": "VND"
				},
				{
					"DiaSmallPriceID": "NATF01",
					"DiaSmallInputDate": "2024-07-11",
					"DiaSmallOriginID": "NAT",
					"DiaSmallWeight": 1,
					"DiaSmallUnit": "Ly",
					"DiaSmallColorID": "F",
					"DiaSmallPrice": "500000.00",
					"Currency": "VND"
				},

				//NATJ
				{
					"DiaSmallPriceID": "NATJ02",
					"DiaSmallInputDate": "2024-07-11",
					"DiaSmallOriginID": "NAT",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallColorID": "J",
					"DiaSmallPrice": "1000000.00",
					"Currency": "VND"
				},
				{
					"DiaSmallPriceID": "NATJ01",
					"DiaSmallInputDate": "2024-07-11",
					"DiaSmallOriginID": "NAT",
					"DiaSmallWeight": 1,
					"DiaSmallUnit": "Ly",
					"DiaSmallColorID": "J",
					"DiaSmallPrice": "500000.00",
					"Currency": "VND"
				},
				
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaSmallPrices", null, {});
	},
};
