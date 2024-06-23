"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Promotions",
			[
				{
					PromotionID: "PROMO01",
					PromotionName: "Khuyến mãi Quốc tế Phụ Nữ",
					PromStartDate: "2024-03-08",
					PromEndDate: "2024-03-09",
					PromPercent: 10.0,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Promotions", null, {});
	},
};
