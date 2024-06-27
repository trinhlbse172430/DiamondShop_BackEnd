"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GoldAges",
			[
				{
					"GoldAgeID": "10K",
					"GoldAgeName": "Vàng 416"
				},
				{
					"GoldAgeID": "14K",
					"GoldAgeName": "Vàng 585"
				},
				{
					"GoldAgeID": "18K",
					"GoldAgeName": "Vàng 75"
				},
				{
					"GoldAgeID": "24K",
					"GoldAgeName": "Vàng 99"
				},
				{
					"GoldAgeID": "8K",
					"GoldAgeName": "Vàng 333"
				},
				{
					"GoldAgeID": "9K",
					"GoldAgeName": "Vàng 375"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("GoldAges", null, {});
	},
};
