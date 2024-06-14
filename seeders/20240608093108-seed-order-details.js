"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"OrderDetail",
			[
				{
					OrderDetailID: "OD001",
					OrderID: "ORD001",
					ProductID: "P001",
					Quantity: 1,
					PriceID: "GP001",
					SalePrice: 1000000,
					Currency: "VND",
				},
				{
					OrderDetailID: "OD002",
					OrderID: "ORD002",
					ProductID: "P002",
					Quantity: 1,
					PriceID: "DP001",
					SalePrice: 2000000,
					Currency: "VND",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("OrderDetail", null, {});
	},
};
