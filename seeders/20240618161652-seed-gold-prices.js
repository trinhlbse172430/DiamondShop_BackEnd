"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GoldPrices",
			[	

					"GoldAgeID": "24K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",

					"GoldUnit": "chỉ",
					"GoldPrice": "34200000.00",
					"Currency": "VND"
				},


				//TRANG24K
				{

					"GoldAgeID": "24K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",

					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "5600000.00",
					"Currency": "VND"
				},
				{

					"GoldAgeID": "14K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "9000000.00",
					"Currency": "VND"
				},{
					"GoldPriceID": "VANGY14K03",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",

					"Currency": "VND"
				},
				


				//VANGY
				{

					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",

					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",

					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",

					"Currency": "VND"
				},



				//VANGY10K
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


				//VANGY9K
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
					"GoldPriceID": "VANGY9K02",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "9K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "6000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY9K03",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "9K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "9000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY9K04",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "9K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "12000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY9K05",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "9K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "15000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY9K06",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "9K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "18000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY9K07",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "9K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "21000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY9K08",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "9K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "24000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY9K09",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "9K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "27000000.00",
					"Currency": "VND"
				},

				//VANGY8K
				{
					"GoldPriceID": "VANGY8K01",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "2700000.00",

					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY8K05",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "2700000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY8K06",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "2700000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY8K07",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "2700000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY8K08",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "2700000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY8K09",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "2700000.00",
					"Currency": "VND"
				},

				
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("GoldPrices", null, {});
	},
};
