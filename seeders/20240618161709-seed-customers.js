"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Customers",
			[
				{
					CustomerID: 1,
					CusPhone: "0901234567",
					CusName: "Nguyễn Văn A",
					CusAddress: "123 Đường ABC, Quận 1, TP HCM",
					CusPoint: 100,
					CusPassword: "hashedpassword",
					CusUsername: "nguyenvana",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Customers", null, {});
	},
};
