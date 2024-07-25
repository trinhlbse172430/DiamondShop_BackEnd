"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaColors",
			[
				{
					"DiaColorID": "D",
					"DiaColorName": "Kim cương không màu"
				},
				{
					"DiaColorID": "E",
					"DiaColorName": "Kim cương không màu"
				},
				{
					"DiaColorID": "F",
					"DiaColorName": "Kim cương không màu"
				},
				{
					"DiaColorID": "J",
					"DiaColorName": "Kim cương gần như không màu"
				},
				
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaColors", null, {});
	},
};
