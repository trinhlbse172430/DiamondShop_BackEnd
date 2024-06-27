"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Products",
			[
				{
					"ProductID": "PT001",
					"ProName": "Nhẫn kim cương",
					"ProTypeID": "NHAN",
					"GoldID": "TRANG14K",
					"DiamondID": "NATDFL",
					"DiamondSmallID": "NATD2LY",
					"DiaSmallQuantity": 10,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 5,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT002",
					"ProName": "Nhẫn kim cương 2",
					"ProTypeID": "NHAN",
					"GoldID": "VANG14K",
					"DiamondID": "NATDFL",
					"DiamondSmallID": "NATD2LY",
					"DiaSmallQuantity": 5,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 4,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT003",
					"ProName": "Vòng chuyền kim cương",
					"ProTypeID": "CHUYEN",
					"GoldID": "TRANG14K",
					"DiamondID": "NATDFL",
					"DiamondSmallID": "NATD2LY",
					"DiaSmallQuantity": 1,
					"WagePrice": "6000000.00",
					"Currency": "VND",
					"Ration": 3,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT004",
					"ProName": "Vòng tay kim cương",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG14K",
					"DiamondID": "NATDFL",
					"DiamondSmallID": "NATD2LY",
					"DiaSmallQuantity": 1,
					"WagePrice": "100000.00",
					"Currency": "VND",
					"Ration": 4,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT005",
					"ProName": "Nhẫn kim cương 3",
					"ProTypeID": "NHAN",
					"GoldID": "VANG14K",
					"DiamondID": "NATDFL",
					"DiamondSmallID": "NATD2LY",
					"DiaSmallQuantity": 5,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 4,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT006",
					"ProName": "Nhẫn kim cương 4",
					"ProTypeID": "NHAN",
					"GoldID": "VANG14K",
					"DiamondID": "NATFVS2",
					"DiamondSmallID": "NATD2LY",
					"DiaSmallQuantity": 10,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 2,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT007",
					"ProName": "Bông tai cương 5",
					"ProTypeID": "BONGTAI",
					"GoldID": "TRANG14K",
					"DiamondID": "NATDFL",
					"DiamondSmallID": "NATD2LY",
					"DiaSmallQuantity": 5,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 4,
					"ProPicture": null
				},
				{
					"ProductID": "PT008",
					"ProName": "Bông tai cương 6",
					"ProTypeID": "BONGTAI",
					"GoldID": "VANG14K",
					"DiamondID": "NATFVS2",
					"DiamondSmallID": "PEOF14LY",
					"DiaSmallQuantity": 1,
					"WagePrice": "1.00",
					"Currency": "VND",
					"Ration":3,
					"ProPicture": null
				},
				{
					"ProductID": "PT009",
					"ProName": "Bông tai cương 7",
					"ProTypeID": "BONGTAI",
					"GoldID": "VANGY18K",
					"DiamondID": "NATFVVS1",
					"DiamondSmallID": "PEOF14LY",
					"DiaSmallQuantity": 1,
					"WagePrice": "1.00",
					"Currency": "VND",
					"Ration": 5,
					"ProPicture": null
				},
				{
					"ProductID": "PT010",
					"ProName": "Vòng chuyền kim cương 2",
					"ProTypeID": "VOCHUYEN",
					"GoldID": "VANG14K",
					"DiamondID": "NATDFL",
					"DiamondSmallID": "PEOF14LY",
					"DiaSmallQuantity": 1,
					"WagePrice": "1.00",
					"Currency": "VND",
					"Ration": 3,
					"ProPicture": null
				},
				{
					"ProductID": "PT011",
					"ProName": "Vòng chuyền kim cương 3",
					"ProTypeID": "VOCHUYEN",
					"GoldID": "TRANG14K",
					"DiamondID": "NATFVS2",
					"DiamondSmallID": "NATD2LY",
					"DiaSmallQuantity": 1,
					"WagePrice": "1.00",
					"Currency": "VND",
					"Ration": 3,
					"ProPicture": null
				},
				{
					"ProductID": "PT012",
					"ProName": "Vòng tay kim cương 2",
					"ProTypeID": "VONGTAY",
					"GoldID": "TRANG14K",
					"DiamondID": "NATDFL",
					"DiamondSmallID": "PEOF14LY",
					"DiaSmallQuantity": 1,
					"WagePrice": "1.00",
					"Currency": "VND",
					"Ration": 3,
					"ProPicture": null
				},
				{
					"ProductID": "PT013",
					"ProName": "Vòng tay kim cương 3",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG14K",
					"DiamondID": "NATGVVS2",
					"DiamondSmallID": "NATD2LY",
					"DiaSmallQuantity": 1,
					"WagePrice": "1.00",
					"Currency": "VND",
					"Ration": 2,
					"ProPicture": null
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Products", null, {});
	},
};
