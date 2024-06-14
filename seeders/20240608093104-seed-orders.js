"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Orders",
			[
				{
					OrderID: "ORD001",
					SaleDate: new Date("2024-01-01T10:00:00Z"),
					CusPhone: "0123456789",
					CusName: "Nguyễn Văn A",
					CusAddress: "123 Đường A, Quận B",
					CusSize: 5,
					Currency: "VND",
					TotalDetailPrice: 1000000,
					DiscountPrice: 100000,
					ShipPrice: 50000,
					TotalPrice: 950000,
					PayBeforePrice: 500000,
					BonusPointID: "BP001",
					OrderPoint: 10,
					PromotionID: "PROM001",
					CustomerID: 1,
					EmployeeIDShip: "EMP001",
					OrdNote: "Giao hàng trước 5h chiều",
					OrdStatus: true,
				},
				{
					OrderID: "ORD002",
					SaleDate: new Date("2024-02-01T10:00:00Z"),
					CusPhone: "0987654321",
					CusName: "Trần Thị B",
					CusAddress: "456 Đường C, Quận D",
					CusSize: 6,
					Currency: "VND",
					TotalDetailPrice: 2000000,
					DiscountPrice: 200000,
					ShipPrice: 100000,
					TotalPrice: 1900000,
					PayBeforePrice: 1000000,
					BonusPointID: "BP002",
					OrderPoint: 20,
					PromotionID: "PROM002",
					CustomerID: 2,
					EmployeeIDShip: "EMP002",
					OrdNote: "Giao hàng buổi sáng",
					OrdStatus: true,
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Orders", null, {});
	},
};
