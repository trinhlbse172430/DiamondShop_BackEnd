"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GoldPrices",
			[	
				{
					"GoldPriceID": "TRANG24K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "5000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG18K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "4500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG14K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "4000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG10K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "3500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG9K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "3000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG8K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "2500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG24K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "5000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG18K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "4500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG14K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "4000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG10K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "3500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG9K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "3000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG8K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "2500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY24K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "5000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY18K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "4500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY14K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "4000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY10K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "10K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "3500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY9K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "9K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "3000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY8K",
					"GoldInputDate": "2024-06-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "2500000.00",
					"Currency": "VND"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("GoldPrices", null, {});
	},
};
