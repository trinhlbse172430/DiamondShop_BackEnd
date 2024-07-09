"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiamondSmalls",
			[
				{
					"DiaSmallID": "NATD02",
					"DiaSmallPicture": "picture",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "NAT",
					"DiaSmallColorID": "D"
				},
				{
					"DiaSmallID": "PEOF03",
					"DiaSmallPicture": "picture",
					"DiaSmallWeight": 3,
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
