"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiamondSmalls",
			[	
				//NATD
				{
					"DiaSmallID": "NATD02",
					"DiaSmallPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "NAT",
					"DiaSmallColorID": "D"
				},
				{
					"DiaSmallID": "NATD01",
					"DiaSmallPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaSmallWeight": 1,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "NAT",
					"DiaSmallColorID": "D"
				},

				//NATE
				{
					"DiaSmallID": "NATE02",
					"DiaSmallPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "NAT",
					"DiaSmallColorID": "E"
				},
				{
					"DiaSmallID": "NATE01",
					"DiaSmallPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaSmallWeight": 1,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "NAT",
					"DiaSmallColorID": "E"
				},


				//NATF
				{
					"DiaSmallID": "NATF02",
					"DiaSmallPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "NAT",
					"DiaSmallColorID": "F"
				},
				{
					"DiaSmallID": "NATF01",
					"DiaSmallPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaSmallWeight": 1,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "NAT",
					"DiaSmallColorID": "F"
				},


				//NATJ
				{
					"DiaSmallID": "NATJ02",
					"DiaSmallPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaSmallWeight": 2,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "NAT",
					"DiaSmallColorID": "J"
				},
				{
					"DiaSmallID": "NATJ01",
					"DiaSmallPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaSmallWeight": 1,
					"DiaSmallUnit": "Ly",
					"DiaSmallOriginID": "NAT",
					"DiaSmallColorID": "J"
				},
				
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiamondSmalls", null, {});
	},
};
