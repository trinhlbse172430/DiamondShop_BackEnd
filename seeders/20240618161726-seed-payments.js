"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Payments",
			[
				{
					PaymentID: 1,
					InputDate: "2024-06-18",
					InputEmployeeID: "EMP001",
					OrderID: "ORD001",
					PayType: "Chuyển khoản",
					Pay: 19000000.0,
					Currency: "VND",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Payments", null, {});
	},
};
