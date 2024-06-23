"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaOrigins",
			[
				{
					DiaOriginID: "DO01",
					DiaOriginName: "Natural",
				},
				{
					DiaOriginID: "DO02",
					DiaOriginName: "Lab-grown",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaOrigins", null, {});
	},
};
