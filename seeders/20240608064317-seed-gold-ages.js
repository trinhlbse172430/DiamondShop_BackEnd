"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"GoldAge",
			[
				{
					GoldAgeID: "GA01",
					GoldAgeName: "18K", 
				},
				{
					GoldAgeID: "GA02",
					GoldAgeName: "24K", 
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("GoldAge", null, {});
	},
};
