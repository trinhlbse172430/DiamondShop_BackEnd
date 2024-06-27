"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"BonusPoints",
			[
				{
					"BonusPointID": "1",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "0.00",
					"MaxPrice": "50000000.00",
					"Point": 5
				},
				{
					"BonusPointID": "2",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "50000001.00",
					"MaxPrice": "100000000.00",
					"Point": 10
				},
				{
					"BonusPointID": "3",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "100000001.00",
					"MaxPrice": "150000000.00",
					"Point": 15
				},
				{
					"BonusPointID": "4",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "150000001.00",
					"MaxPrice": "200000000.00",
					"Point": 20
				},
				{
					"BonusPointID": "5",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "200000001.00",
					"MaxPrice": "250000000.00",
					"Point": 25
				},
				{
					"BonusPointID": "6",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "250000001.00",
					"MaxPrice": "300000000.00",
					"Point": 30
				},
				{
					"BonusPointID": "7",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "300000001.00",
					"MaxPrice": "350000000.00",
					"Point": 35
				},
				{
					"BonusPointID": "8",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "350000001.00",
					"MaxPrice": "400000000.00",
					"Point": 40
				},
				{
					"BonusPointID": "9",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "400000001.00",
					"MaxPrice": "450000000.00",
					"Point": 45
				},
				{
					"BonusPointID": "10",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "450000001.00",
					"MaxPrice": "500000000.00",
					"Point": 50
				},
				{
					"BonusPointID": "11",
					"StartDisDate": "2024-05-06",
					"EndDisDate": "2024-07-31",
					"MinPrice": "500000001.00",
					"MaxPrice": "9999999999999.00",
					"Point": 55
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("BonusPoints", null, {});
	},
};
