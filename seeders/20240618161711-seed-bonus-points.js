"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"BonusPoints",
			[
				{
					"BonusPointID": "1",
					"StartDisDate": "2008-11-11",
					"EndDisDate": "2008-11-12",
					"MinPrice": "5000000.00",
					"MaxPrice": "10000000.00",
					"Point": 10
				},
				{
					"BonusPointID": "2",
					"StartDisDate": "2008-11-11",
					"EndDisDate": "2008-11-12",
					"MinPrice": "10000000.00",
					"MaxPrice": "50000000.00",
					"Point": 20
				},
				{
					"BonusPointID": "3",
					"StartDisDate": "2008-11-11",
					"EndDisDate": "2008-11-12",
					"MinPrice": "50000000.00",
					"MaxPrice": "90000000.00",
					"Point": 30
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("BonusPoints", null, {});
	},
};
