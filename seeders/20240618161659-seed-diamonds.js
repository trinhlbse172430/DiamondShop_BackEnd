"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Diamonds",
			[
				{
					DiamondID: "DIA01",
					GIAID: "GIA01",
					DiaPicture: "base64encodedimage",
					DiaOriginID: "DO01",
					DiaWeight: 1.0,
					DiaUnit: "ct",
					DiaColorID: "DC01",
					DiaClarityID: "DC01",
					DiaCut: "Excellent",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Diamonds", null, {});
	},
};
