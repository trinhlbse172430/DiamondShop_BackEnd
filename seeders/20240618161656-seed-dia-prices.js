"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaPrices",
			[
				{
					"DiaPriceID": "NATDFL",
					"DiaInputDate": "2024-06-10",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "FL",
					"DiaPrice": "2000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS2",
					"DiaInputDate": "2024-06-10",
					"DiaOriginID": "PEO",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaPrice": "1800000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS1",
					"DiaInputDate": "2024-06-10",
					"DiaOriginID": "NAT",
					"DiaWeight": 2,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaPrice": "1900000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATGVVS2",
					"DiaInputDate": "2024-06-10",
					"DiaOriginID": "NAT",
					"DiaWeight": 2,
					"DiaUnit": "Ly",
					"DiaColorID": "G",
					"DiaClarityID": "VVS2",
					"DiaPrice": "1700000.00",
					"Currency": "VND"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaPrices", null, {});
	},
};
