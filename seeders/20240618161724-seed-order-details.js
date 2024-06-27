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
					"Quantity": 2,
					"GoldPriceID": "TRANG14K",
					"DiaPriceID": "NATDFL",
					"DiaSmallPriceID": "NATD2LY",
					"SalePrice": "7300000.00",
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
