"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Gold",
			[
				{
					GoldID: "G001",
					GoldPicture:
						"https://img.freepik.com/free-vector/realistic-solid-gold-background_23-2151059803.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717718400&semt=sph",
					GoldTypeID: "GT01",
					GoldAgeID: "GA01",
					GoldWeight: 1.0,
					GoldUnit: "gram",
				},
				{
					GoldID: "G002",
					GoldPicture:
						"https://media.istockphoto.com/id/1459235752/vi/anh/k%E1%BA%BFt-c%E1%BA%A5u-n%E1%BB%81n-tr%E1%BB%ABu-t%C6%B0%E1%BB%A3ng-t%C6%B0%E1%BB%9Dng-s%C3%A1ng-b%C3%B3ng-v%C3%A0ng-beatiful-luxury-v%C3%A0-elegant.jpg?s=612x612&w=0&k=20&c=bV-YojUf2jEp3vN2gSRqxTBeBHYkU2SGVD7MIv1V_Tg=",
					GoldTypeID: "GT02",
					GoldAgeID: "GA02",
					GoldWeight: 2.0,
					GoldUnit: "gram",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Gold", null, {});
	},
};
