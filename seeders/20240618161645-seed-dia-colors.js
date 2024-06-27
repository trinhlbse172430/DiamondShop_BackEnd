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
					"DiaColorID": "G",
					"DiaColorName": "Kim cương gần như không màu"
				},
				{
					"DiaColorID": "H",
					"DiaColorName": "Kim cương gần như không màu"
				},
				{
					"DiaColorID": "I",
					"DiaColorName": "Kim cương gần như không màu"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaColors", null, {});
	},
};
