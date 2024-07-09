"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Golds",
			[	
				{
					"GoldID": "TRANG24K05",
					"GoldPicture": "picture",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "TRANG14K05",
					"GoldPicture": "picture",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "TRANG10K05",
					"GoldPicture": "picture",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "TRANG9K05",
					"GoldPicture": "picture",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "TRANG8K05",
					"GoldPicture": "picture",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "VANG24K05",
					"GoldPicture": "picture",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "VANG14K05",
					"GoldPicture": "picture",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "VANG10K05",
					"GoldPicture": "picture",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "VANG9K05",
					"GoldPicture": "picture",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "VANG8K05",
					"GoldPicture": "picture",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ"
				},
				{
					"GoldID": "VANGY18K05",
					"GoldPicture": "picture",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "18K",
					"GoldWeight": 5,
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
