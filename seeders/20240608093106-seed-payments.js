"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Payment",
			[
				{
					PaymentID: 1,
					InputDate: new Date("2024-01-01T12:00:00Z"),
					InputEmployeeID: "EMP001",
					OrderID: "ORD001",
					PayType: "Tiền mặt",
					Pay: 950000,
					Currency: "VND",
					NotePayment: "Thanh toán toàn bộ đơn hàng",
				},
				{
					PaymentID: 2,
					InputDate: new Date("2024-02-01T12:00:00Z"),
					InputEmployeeID: "EMP002",
					OrderID: "ORD002",
					PayType: "Chuyển khoản",
					Pay: 1900000,
					Currency: "VND",
					NotePayment: "Thanh toán toàn bộ đơn hàng",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Payment", null, {});
	},
};
