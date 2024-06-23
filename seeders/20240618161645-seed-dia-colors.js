"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaColors",
			[
				{ DiaColorID: "DC01", DiaColorName: "D" },
				{ DiaColorID: "DC02", DiaColorName: "E" },
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaColors", null, {});
	},
};
