"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GoldAges",
			[
				{ GoldAgeID: "GA01", GoldAgeName: "18K" },
				{ GoldAgeID: "GA02", GoldAgeName: "24K" },
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("GoldAges", null, {});
	},
};
