"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaPrices",
			[
				{
					DiaPriceID: "DP01",
					DiaInputDate: "2024-06-18",
					DiaOriginID: "DO01",
					DiaWeight: 1.0,
					DiaUnit: "ct",
					DiaColorID: "DC01",
					DiaClarityID: "DC01",
					DiaPrice: 15000000.0,
					Currency: "VND",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaPrices", null, {});
	},
};
