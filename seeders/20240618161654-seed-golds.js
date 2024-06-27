"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Golds",
			[
				{
					"GoldID": "TRANG14K",
					"GoldPicture": "picture",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "VANG14K",
					"GoldPicture": "picture",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "VANGY18K",
					"GoldPicture": "picture",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "18K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Golds", null, {});
	},
};
