"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Promotion",
			[
				{
					PromotionID: "PROM001",
					PromotionName: "Quốc tế Phụ Nữ",
					PromStartDate: new Date("2024-03-08"),
					PromEndDate: new Date("2024-03-09"),
					PromPercent: 10,
				},
				{
					PromotionID: "PROM002",
					PromotionName: "Nhà giáo Việt Nam",
					PromStartDate: new Date("2024-11-20"),
					PromEndDate: new Date("2024-12-09"),
					PromPercent: 20,
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Promotion", null, {});
	},
};
