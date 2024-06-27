"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Orders",
			[
				{
					"OrderID": "ORD001",
					"SaleDate": "2024-06-20",
					"CusPhone": "0823667838",
					"CusName": "nguyen van b",
					"CusAddress": "04 ngõ 67 Chu Văn An",
					"TotalDetailPrice": "19500000.00",
					"DiscountPrice": "2000000.00",
					"TotalPrice": "17550000.00",
					"ShipPrice": "50000.00",
					"Currency": "VND",
					"BonusPointID": "4",
					"OrderPoint": 20,
					"PromotionID": "PRO001",
					"CustomerID": 2,
					"EmployeeIDShip": "EMP002",
					"OrdNote": "giao nhanh",
					"OrdStatus": 1,

				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Orders", null, {});
	},
};
