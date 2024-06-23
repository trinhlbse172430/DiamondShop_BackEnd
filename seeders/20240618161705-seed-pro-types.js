"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"ProTypes",
			[
				{
					ProTypeID: "PT01",
					ProTypeName: "Ring",
				},
				{
					ProTypeID: "PT02",
					ProTypeName: "Necklace",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("ProTypes", null, {});
	},
};
