"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"OrderDetails",
			[
				{
					OrderDetailID: "OD01",
					OrderID: "O01",
					ProductID: "P01",
					Quantity: 1,
					GoldPriceID: "GP01",
					DiaPriceID: "DP01",
					DiaSmallPriceID: "DSP01",
					SalePrice: 19000000.0,
					Currency: "VND",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("OrderDetails", null, {});
	},
};
