"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"ProType",
			[
				{
					ProTypeID: "PT01",
					ProTypeName: "Nhẫn",
				},
				{
					ProTypeID: "PT02",
					ProTypeName: "Dây chuyền",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("ProType", null, {});
	},
};
