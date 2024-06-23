"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GIALists",
			[
				{
					GIAID: "GIA01",
					GIAPicture: "base64encodedimage",
					Origin: "Natural",
					Weight: 1.0,
					DiaUnit: "ct",
					Color: "D",
					Clarity: "IF",
					Cut: "Excellent",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("GIALists", null, {});
	},
};
