"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Diamonds",
			[
				{
					"DiamondID": "NATDFL",
					"GIAID": "GIA001",
					"DiaPicture": "picture",
					"GIAPicture": "picture",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "FL",
					"DiaCut": "round"
				},
				{
					"DiamondID": "NATFVS2",
					"GIAID": "GIA001",
					"DiaPicture": "picture",
					"GIAPicture": null,
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS1",
					"GIAID": "GIA001",
					"DiaPicture": "picture",
					"GIAPicture": null,
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaCut": "Oval"
				},
				{
					"DiamondID": "NATGVVS2",
					"GIAID": "GIA001",
					"DiaPicture": "picture",
					"GIAPicture": null,
					"DiaOriginID": "NAT",
					"DiaWeight": 1,
					"DiaUnit": "Ly",
					"DiaColorID": "G",
					"DiaClarityID": "VVS2",
					"DiaCut": "Heart"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Diamonds", null, {});
	},
};
