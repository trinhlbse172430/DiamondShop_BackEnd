"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"DiaSmallPrice",
			[
				{
					DiaSmallPriceID: "DSP001",
					DiaSmallInputDate: new Date(),
					DiaSmallOrigin: "Kim cương tự nhiên",
					DiaSmallWeight: 0.1,
					DiaSmallUnit: "Ly",
					DiaSmallColor: "F",
					DiaSmallPrice: 2000000,
					Currency: "VND",
				},
				{
					DiaSmallPriceID: "DSP002",
					DiaSmallInputDate: new Date(),
					DiaSmallOrigin: "Kim cương nhân tạo",
					DiaSmallWeight: 0.2,
					DiaSmallUnit: "Ly",
					DiaSmallColor: "H",
					DiaSmallPrice: 1500000,
					Currency: "VND",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("DiaSmallPrice", null, {});
	},
};
