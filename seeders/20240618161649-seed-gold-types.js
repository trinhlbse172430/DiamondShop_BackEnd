"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GoldTypes",
			[
				{
					"GoldTypeID": "TRANG",
					"GoldTypeName": "Vàng trắng"
				},
				{
					"GoldTypeID": "VANG",
					"GoldTypeName": "Vàng vàng"
				},
				{
					"GoldTypeID": "VANGY",
					"GoldTypeName": "Vàng ý"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("GoldTypes", null, {});
	},
};
