"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GoldPrices",
			[	
				//VANG
				{
					"GoldPriceID": "VANG24K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "7400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG18K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "5500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG14K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "4300000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG10K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "3100000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG9K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "2800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG8K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "2500000.00",
					"Currency": "VND"
				},


				//TRANG24K
				{
					"GoldPriceID": "TRANG24K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "7500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG18K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "18K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "5600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG14K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "4400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG10K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "3200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG9K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "2900000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG8K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "2600000.00",
					"Currency": "VND"
				},
				


				//VANGY
				{
					"GoldPriceID": "VANGY24K01",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "7600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY18K01",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "5700000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY14K01",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "4500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY10K01",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "10K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "3300000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY9K01",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "9K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "3000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY8K01",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "2700000.00",
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
