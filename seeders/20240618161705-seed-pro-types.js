"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"ProTypes",
			[
				{
					"ProTypeID": "BONGTAI",
					"ProTypeName": "Bông Tai"
				},
				{
					"ProTypeID": "CHUYEN",
					"ProTypeName": "Dây Chuyền"
				},
				{
					"ProTypeID": "NHAN",
					"ProTypeName": "Nhẫn"
				},
				{
					"ProTypeID": "VOCHUYEN",
					"ProTypeName": "Vỏ Mặt Dây Chuyền"
				},
				{
					"ProTypeID": "VONGTAY",
					"ProTypeName": "Vòng Tay"
				},
				{
					"ProTypeID": "VONHAN",
					"ProTypeName": "Vỏ Nhẫn"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("ProTypes", null, {});
	},
};
