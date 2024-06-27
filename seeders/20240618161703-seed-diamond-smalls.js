"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiamondSmalls",
			[
				{
					"DiaSmallID": "NATD2LY",
					"DiaSmallPicture": "picture",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "NAT",
					"DiaSmallColorID": "D"
				},
				{
					"DiaSmallID": "PEOF14LY",
					"DiaSmallPicture": "picture",
					"DiaSmallWeight": 14,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "PEO",
					"DiaSmallColorID": "F"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiamondSmalls", null, {});
	},
};
