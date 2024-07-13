"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Products",
			[
				{
					"ProductID": "PT001",
					"ProName": "Nhẫn KC Trắng 14K",
					"ProTypeID": "NHAN",
					"GoldID": "TRANG14K05",
					"DiamondID": "NATDIF03",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 10,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT002",
					"ProName": "Nhẫn KC Vàng 24K",
					"ProTypeID": "NHAN",
					"GoldID": "VANG24K05",
					"DiamondID": "NATDVVS104",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 15,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT003",
					"ProName": "Dây chuyền KC Trắng 14K",
					"ProTypeID": "DAYCHUYEN",
					"GoldID": "TRANG14K06",
					"DiamondID": "NATDVVS202",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 30,
					"WagePrice": "6000000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT004",
					"ProName": "Vòng tay KC Vàng 24K",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG24K08",
					"DiamondID": "NATEIF05",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 25,
					"WagePrice": "100000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT005",
					"ProName": "Nhẫn KC Vàng 14K",
					"ProTypeID": "NHAN",
					"GoldID": "VANG14K03",
					"DiamondID": "NATDVVS105",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 35,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT006",
					"ProName": "Nhẫn KC Vàng 8K ",
					"ProTypeID": "NHAN",
					"GoldID": "VANG8K05",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATD01",
					"DiaSmallQuantity": 50,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT007",
					"ProName": "Bông tai KC Trắng 14K",
					"ProTypeID": "BONGTAI",
					"GoldID": "TRANG14K05",
					"DiamondID": "NATEVS203",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 45,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT008",
					"ProName": "Bông tai KC Vàng 14K ",
					"ProTypeID": "BONGTAI",
					"GoldID": "VANG14K04",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATF01",
					"DiaSmallQuantity": 25,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT009",
					"ProName": "Bông tai KC Vàng Ý 18K ",
					"ProTypeID": "BONGTAI05",
					"GoldID": "VANGY18K05",
					"DiamondID": "NATFVVS103",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 35,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT010",
					"ProName": "Dây chuyền KC Vàng 14K",
					"ProTypeID": "DAYCHUYEN",
					"GoldID": "VANG14K03",
					"DiamondID": "NATJIF03",
					"DiamondSmallID": "NATD01",
					"DiaSmallQuantity": 30,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT011",
					"ProName": "Dây chuyền KC Trắng 24K",
					"ProTypeID": "DAYCHUYEN",
					"GoldID": "TRANG24K05",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATE02",
					"DiaSmallQuantity": 20,
					"WagePrice": "1100000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT012",
					"ProName": "Vòng tay KC Trắng 24K",
					"ProTypeID": "VONGTAY",
					"GoldID": "TRANG24K05",
					"DiamondID": "NATDVVS203",
					"DiamondSmallID": "NATF2",
					"DiaSmallQuantity": 10,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT013",
					"ProName": "Vòng tay KC Vàng 10K",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG10K05",
					"DiamondID": "NATDVVS203",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 20,
					"WagePrice": "300000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT016",
					"ProName": "Bông tai KC Vàng 10K",
					"ProTypeID": "BONGTAI",
					"GoldID": "VANG10K06",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATD01",
					"DiaSmallQuantity": 40,
					"WagePrice": "100000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT017",
					"ProName": "Bông tai KC Vàng 9K",
					"ProTypeID": "BONGTAI",
					"GoldID": "VANG9K05",
					"DiamondID": "NATEVS103",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 30,
					"WagePrice": "100000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT018",
					"ProName": "Dây chuyền KC Trắng 9k",
					"ProTypeID": "DAYCHUYEN",
					"GoldID": "TRANG9K05",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 20,
					"WagePrice": "900000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT019",
					"ProName": "Dây chuyền KC Trắng 10K",
					"ProTypeID": "DAYCHUYEN",
					"GoldID": "TRANG10K04",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 40,
					"WagePrice": "700000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT020",
					"ProName": "Dây chuyền KC Trắng 8K ",
					"ProTypeID": "DAYCHUYEN",
					"GoldID": "TRANG8K05",
					"DiamondID": "NATFVVS103",
					"DiamondSmallID": "NATE02",
					"DiaSmallQuantity": 25,
					"WagePrice": "300000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT021",
					"ProName": "Dây chuyền KC Vàng 10K",
					"ProTypeID": "DAYCHUYEN",
					"GoldID": "VANG10K05",
					"DiamondID": "NATJVVS203",
					"DiamondSmallID": "NATJ02",
					"DiaSmallQuantity": 40,
					"WagePrice": "600000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT022",
					"ProName": "Dây chuyền KC Vàng 8K",
					"ProTypeID": "DAYCHUYEN",
					"GoldID": "VANG8K05",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 45,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT023",
					"ProName": "Vòng tay KC Trắng 14K",
					"ProTypeID": "VONGTAY",
					"GoldID": "TRANG14K05",
					"DiamondID": "NATFVVS103",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 35,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT024",
					"ProName": "Vòng tay KC Vàng 14K",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG14K05",
					"DiamondID": "NATDVVS203",
					"DiamondSmallID": "NATD01",
					"DiaSmallQuantity": 25,
					"WagePrice": "700000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
				{
					"ProductID": "PT025",
					"ProName": "Nhẫn KC Trắng 9k",
					"ProTypeID": "NHAN",
					"GoldID": "TRANG9K05",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATJ02",
					"DiaSmallQuantity": 15,
					"WagePrice": "1000000.00",
					"Currency": "VND",
					"Ration": 100,
					"ProPicture": "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg"
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Products", "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg", {});
	},
};
