"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaOrigins",
			[
				{
					"DiaOriginID": "NAT",
					"DiaOriginName": "Tự nhiên"
				  },
				  {
					"DiaOriginID": "PEO",
					"DiaOriginName": "Nhân tạo"
				  }
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaOrigins", null, {});
	},
};
