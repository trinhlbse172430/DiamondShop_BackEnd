"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiamondSmalls",
			[
				{
					DiaSmallID: "DS01",
					DiaSmallPicture: "base64encodedimage",
					DiaSmallWeight: 0.5,
					DiaSmallUnit: "ct",
					DiaSmallOriginID: "DO01",
					DiaSmallColorID: "DC01",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiamondSmalls", null, {});
	},
};
