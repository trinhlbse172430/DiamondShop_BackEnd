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
					"ProTypeID": "VONGTAY",
					"ProTypeName": "Vòng Tay"
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("ProTypes", null, {});
	},
};
