"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"DiaPrice",
			[
				{
					DiaPriceID: "DP001",
					DiaInputDate: new Date(),
					DiaOrigin: "Kim cương tự nhiên",
					DiaWeight: 1.2,
					DiaUnit: "Ly",
					DiaColor: "D",
					DiaClarity: "IF",
					DiaPrice: 10000000,
					Currency: "VND",
				},
				{
					DiaPriceID: "DP002",
					DiaInputDate: new Date(),
					DiaOrigin: "Kim cương nhân tạo",
					DiaWeight: 0.5,
					DiaUnit: "Ly",
					DiaColor: "G",
					DiaClarity: "VS1",
					DiaPrice: 5000000,
					Currency: "VND",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("DiaPrice", null, {});
	},
};
