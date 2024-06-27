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
					"ProTypeID": "DAYCHUYEN",
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
