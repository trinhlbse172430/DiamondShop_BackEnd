"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GoldPrices",
			[	
				//VANG24K
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
					"GoldPriceID": "VANG24K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "14800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG24K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "22200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG24K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "29600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG24K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "37000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG24K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "44400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG24K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "51800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG24K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "59200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG24K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "24K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "66600000.00",
					"Currency": "VND"
				},
				



				//VANG18K
				{
					"GoldPriceID": "VANG18K01",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "18K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "5500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG18K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "18K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "11000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG18K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "18K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "16500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG18K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "18K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "22000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG18K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "18K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "27500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG18K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "18K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "33000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG18K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "18K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "38500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG18K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "18K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "44000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG18K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "18K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "49500000.00",
					"Currency": "VND"
				},




				//VANG14K
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
					"GoldPriceID": "VANG14K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "8600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG14K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "12900000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG14K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "17200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG14K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "21500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG14K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "25800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG14K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "30100000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG14K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "34400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG14K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "14K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "38700000.00",
					"Currency": "VND"
				},


				//VANG10K
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
					"GoldPriceID": "VANG10K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "6200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG10K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "9300000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG10K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "12400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG10K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "15500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG10K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "18600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG10K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "21700000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG10K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "24800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG10K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "10K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "27900000.00",
					"Currency": "VND"
				},




				//VANG9K
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
					"GoldPriceID": "VANG9K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "5600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG9K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "8400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG9K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "11200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG9K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "11400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG9K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "16800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG9K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "19600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG9K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "22400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG9K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "9K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "25200000.00",
					"Currency": "VND"
				},



				//VANG8K
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
				{
					"GoldPriceID": "VANG8K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "5000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG8K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "5500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG8K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "10000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG8K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "12500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG8K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "15000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG8K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "17500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG8K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "20000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANG8K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "VANG",
					"GoldAgeID": "8K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "22500000.00",
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
					"GoldPriceID": "TRANG24K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "15000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG24K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "22500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG24K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "30000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG24K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "37500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG24K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "45000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG24K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "52500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG24K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "60000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG24K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "24K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "67500000.00",
					"Currency": "VND"
				},



				//TRANG18K
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
					"GoldPriceID": "TRANG18K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "18K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "11200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG18K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "18K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "16800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG18K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "18K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "22400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG18K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "18K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "28000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG18K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "18K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "33600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG18K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "18K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "39200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG18K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "18K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "44800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG18K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "18K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "50400000.00",
					"Currency": "VND"
				},



				//TRANG14K
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
					"GoldPriceID": "TRANG14K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "8800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG14K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "13200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG14K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "17600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG14K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "22000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG14K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "26400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG14K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "30800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG14K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "35200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG14K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "14K",
					"GoldWeight": 1,
					"GoldUnit": "chỉ",
					"GoldPrice": "39600000.00",
					"Currency": "VND"
				},


				//TRANG10K
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
					"GoldPriceID": "TRANG10K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "6400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG10K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "9600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG10K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "12800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG10K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "16000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG10K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "19200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG10K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "22400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG10K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "25600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG10K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "10K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "28800000.00",
					"Currency": "VND"
				},



				//TRANG9K
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
					"GoldPriceID": "TRANG9K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "5800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG9K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "8700000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG9K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "11600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG9K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "14500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG9K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "17400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG9K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "20300000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG9K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "23200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG9K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "9K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "26100000.00",
					"Currency": "VND"
				},



				//TRANG8K
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
				{
					"GoldPriceID": "TRANG8K02",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "5200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG8K03",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "7800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG8K04",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "10400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG8K05",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "13000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG8K06",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "15600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG8K07",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "18200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG8K08",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "20800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "TRANG8K09",
					"GoldInputDate": "2024-07-13",
					"GoldTypeID": "TRANG",
					"GoldAgeID": "8K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "23400000.00",
					"Currency": "VND"
				},
				


				//VANGY24K
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
					"GoldPriceID": "VANGY24K02",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "15200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY24K03",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "22800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY24K04",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "30400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY24K05",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "38000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY24K06",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "45600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY24K07",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "53200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY24K08",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "60800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY24K09",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "68400000.00",
					"Currency": "VND"
				},




				//VANGY18K
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
					"GoldPriceID": "VANGY18K02",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "11400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY18K03",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "17100000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY18K04",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "22800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY18K05",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "28500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY18K06",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "34200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY18K07",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "39900000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY18K08",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "45600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY18K09",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "24K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "51300000.00",
					"Currency": "VND"
				},



				//VANGY14K
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
					"GoldPriceID": "VANGY14K02",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
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
					"GoldPrice": "13500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY14K04",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "18000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY14K05",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "22500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY14K06",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "27000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY14K07",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "31500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY14K08",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "36000000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY14K09",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "14K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "40500000.00",
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
				{
					"GoldPriceID": "VANGY10K02",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "10K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "6600000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY10K03",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "10K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "9900000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY10K04",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "10K",
					"GoldWeight": 4,
					"GoldUnit": "chỉ",
					"GoldPrice": "13200000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY10K05",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "10K",
					"GoldWeight": 5,
					"GoldUnit": "chỉ",
					"GoldPrice": "16500000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY10K06",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "10K",
					"GoldWeight": 6,
					"GoldUnit": "chỉ",
					"GoldPrice": "19800000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY10K07",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "10K",
					"GoldWeight": 7,
					"GoldUnit": "chỉ",
					"GoldPrice": "23100000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY10K08",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "10K",
					"GoldWeight": 8,
					"GoldUnit": "chỉ",
					"GoldPrice": "26400000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY10K09",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "10K",
					"GoldWeight": 9,
					"GoldUnit": "chỉ",
					"GoldPrice": "29700000.00",
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
					"GoldPriceID": "VANGY8K02",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 2,
					"GoldUnit": "chỉ",
					"GoldPrice": "2700000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY8K03",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 3,
					"GoldUnit": "chỉ",
					"GoldPrice": "2700000.00",
					"Currency": "VND"
				},
				{
					"GoldPriceID": "VANGY8K04",
					"GoldInputDate": "2024-07-11",
					"GoldTypeID": "VANGY",
					"GoldAgeID": "8K",
					"GoldWeight": 4,
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
