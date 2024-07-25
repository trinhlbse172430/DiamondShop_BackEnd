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
					CusPoint: 40,
					CusPassword: "123",
					CusUsername: "nguyenvana",
					CusEmail: "nguyenvana@gmail.com",
				},
				{
					CustomerID: 2,
					CusPhone: "0823667838",
					CusName: "Nguyễn Văn B",
					CusPoint: 0,
					CusPassword: "123",
					CusUsername: "nguyenvanb",
					CusEmail: "nguyenvanb@gmail.com",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Customers", null, {});
	},
};
