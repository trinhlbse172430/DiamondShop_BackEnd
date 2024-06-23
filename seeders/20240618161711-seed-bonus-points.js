"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"BonusPoints",
			[
				{
					BonusPointID: "BP01",
					StartDisDate: "2024-06-01",
					EndDisDate: "2024-06-30",
					MinPrice: 1000000.0,
					MaxPrice: 5000000.0,
					Point: 50,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("BonusPoints", null, {});
	},
};
