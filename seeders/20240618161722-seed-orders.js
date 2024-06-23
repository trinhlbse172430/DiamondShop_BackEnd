"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Orders",
			[
				{
					OrderID: "O01",
					SaleDate: "2024-06-18",
					CusPhone: "0901234567",
					CusName: "Nguyễn Văn A",
					CusAddress: "123 Đường ABC, Quận 1, TP HCM",
					CusSize: 1,
					TotalDetailPrice: 20000000.0,
					DiscountPrice: 1000000.0,
					TotalPrice: 19000000.0,
					ShipPrice: 50000.0,
					PayBeforePrice: 1000000.0,
					Currency: "VND",
					BonusPointID: "BP01",
					OrderPoint: 10,
					PromotionID: "PROMO01",
					CustomerID: 1,
					EmployeeIDShip: "E01",
					OrdNote: "Giao hàng nhanh",
					OrdStatus: true,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Orders", null, {});
	},
};
