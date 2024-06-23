"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Products",
			[
				{
					ProductID: "P01",
					ProTypeID: "PT01",
					GoldID: "G01",
					DiamondID: "DIA01",
					DiamondSmallID: "DS01",
					DiaSmallQuantity: 2,
					WagePrice: 5000000.0,
					Currency: "VND",
					Ration: 0.8,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Products", null, {});
	},
};
