"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Product",
			[
				{
					ProductID: "P001",
					ProTypeID: "PT01",
					GoldID: "G001",
					DiamondID: "DIA001",
					DiamondSmallID: "DS001",
					DiaSmallQuantity: 10,
					WagePrice: 200000,
					Currency: "VND",
					Ration: 1.1,
				},
				{
					ProductID: "P002",
					ProTypeID: "PT02",
					GoldID: "G002",
					DiamondID: "DIA002",
					DiamondSmallID: "DS002",
					DiaSmallQuantity: 5,
					WagePrice: 150000,
					Currency: "VND",
					Ration: 1.05,
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Product", null, {});
	},
};
