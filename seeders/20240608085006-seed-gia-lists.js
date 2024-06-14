"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"GIAList",
			[
				{
					GIAID: "GIA001",
					GIAPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmK1wXnYEgvn2Emx05toMDs4IWeNo-DYOjYg&s",
					Origin: "Kim cương tự nhiên",
					Weight: 1.2,
					DiaUnit: "Ly",
					Color: "D",
					Clarity: "VVS1",
					Cut: "Round",
					
				},
				{
					GIAID: "GIA002",
					GIAPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmK1wXnYEgvn2Emx05toMDs4IWeNo-DYOjYg&s",
					Origin: "Kim cương nhân tạo",
					Weight: 0.8,
					DiaUnit: "Ly",
					Color: "G",
					Clarity: "VS2",
					Cut: "Oval",
					
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("GIAList", null, {});
	},
};
