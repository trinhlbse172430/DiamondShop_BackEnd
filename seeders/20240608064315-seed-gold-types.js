"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"GoldType",
			[
				{
					GoldTypeID: "GT01",
					GoldTypeName: "Vàng Trắng",
				},
				{
					GoldTypeID: "GT02",
					GoldTypeName: "Vàng Hồng",
				},
				{
					GoldTypeID: "GT03",
					GoldTypeName: "Vàng Vàng",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("GoldType", null, {});
	},
};
