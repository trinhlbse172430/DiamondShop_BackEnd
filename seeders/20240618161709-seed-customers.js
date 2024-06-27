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
					CusPoint: 100,
					CusPassword: "hashedpassword",
					CusUsername: "nguyenvana",
					CusEmail: "nguyena@gmail.com",
				},
				{
					CustomerID: 2,
					CusPhone: "0823667838",
					CusName: "Nguyễn Văn B",
					CusPoint: 100,
					CusPassword: "123",
					CusUsername: "minh",
					CusEmail: "yenduls@gmail.com@",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Customers", null, {});
	},
};
