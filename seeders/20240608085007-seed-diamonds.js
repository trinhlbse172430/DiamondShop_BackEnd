"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Diamond",
			[
				{
					DiamondID: "DIA001",
					GIAID: "GIA001",
					DiaPicture:
						"https://cdn.pnj.io/images/detailed/48/kim-cuong-4.04.0-if-d-pnj-gia-10102.30040040.png",
					
				},
				{
					DiamondID: "DIA002",
					GIAID: "GIA002",
					DiaPicture:
						"https://jemmia.vn/wp-content/uploads/2022/05/do-cung-cua-kim-cuong-la-bao-nhieu-1.jpg",
					
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Diamond", null, {});
	},
};
