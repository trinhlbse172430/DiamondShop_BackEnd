"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Golds",
			[
				{
					GoldID: "G01",
					GoldPicture: "base64encodedimage",
					GoldTypeID: "GT01",
					GoldAgeID: "GA01",
					GoldWeight: 1.0,
					GoldUnit: "chi",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Golds", null, {});
	},
};
