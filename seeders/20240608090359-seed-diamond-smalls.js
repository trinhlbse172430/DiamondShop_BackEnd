"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"DiamondSmall",
			[
				{
					DiaSmallID: "DS001",
					DiaSmallPicture:
						"https://cashfordiamondsusa.com/wp-content/uploads/2022/05/a-scattering-of-small-transparent-diamonds-on-velvet-1024x682.jpg",
					DiaSmallWeight: 0.1,
					DiaSmallUnit: "Ly",
				},
				{
					DiaSmallID: "DS002",
					DiaSmallPicture: "https://m.media-amazon.com/images/I/61mFhNE1TPL._AC_UY1000_.jpg",
					DiaSmallWeight: 0.15,
					DiaSmallUnit: "Ly",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("DiamondSmall", null, {});
	},
};
