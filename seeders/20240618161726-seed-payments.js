"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Payments",
			[
				{
					PaymentID: 1,
					InputDate: "2024-07-13",
					InputEmployeeID: "EMP003",
					OrderID: "ORD001",
					PayType: "Chuyển khoản",
					Pay: 46800000.0,
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
