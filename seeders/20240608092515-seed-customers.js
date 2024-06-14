"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Customer",
			[
				{
					CustomerID: 1,
					CusPhone: "0123456789",
					CusName: "Nguyễn Văn A",
					CusAddress: "123 Đường A, Quận B",
					CusPoint: 100,
				},
				{
					CustomerID: 2,
					CusPhone: "0987654321",
					CusName: "Trần Thị B",
					CusAddress: "456 Đường C, Quận D",
					CusPoint: 200,
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Customer", null, {});
	},
};
