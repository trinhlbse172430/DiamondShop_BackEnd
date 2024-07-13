"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"OrderDetails",
			[
				{
					"OrderDetailID": "OD001",
					"OrderID": "ORD001",
					"ProductID": "PT002",
					"Quantity": 1,
					"GoldPriceID": "VANG24K01",
					"DiaPriceID": "NATDVVS104",
					"DiaSmallPriceID": "NATD02",
					"SalePrice": "52000000.00",
					"Currency": "VND",
					"CusSize": "15mm"
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("OrderDetails", null, {});
	},
};
