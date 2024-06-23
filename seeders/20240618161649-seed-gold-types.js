"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GoldTypes",
			[
				{
					GoldTypeID: "GT01",
					GoldTypeName: "Vàng trắng",
				},
				{
					GoldTypeID: "GT02",
					GoldTypeName: "Vàng hồng",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("GoldTypes", null, {});
	},
};
