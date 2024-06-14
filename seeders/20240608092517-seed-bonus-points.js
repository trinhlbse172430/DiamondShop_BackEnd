"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"BonusPoint",
			[
				{
					BonusPointID: "BP001",
					StartDisDate: new Date("2024-01-01"),
					EndDisDate: new Date("2024-12-31"),
					MinPrice: 500000,
					MaxPrice: 5000000,
					Point: 10,
				},
				{
					BonusPointID: "BP002",
					StartDisDate: new Date("2024-06-01"),
					EndDisDate: new Date("2024-12-31"),
					MinPrice: 1000000,
					MaxPrice: 10000000,
					Point: 20,
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("BonusPoint", null, {});
	},
};
