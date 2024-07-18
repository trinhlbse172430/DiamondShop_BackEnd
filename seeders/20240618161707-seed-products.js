"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Products",
			[
				//NHAN
				{
					"ProductID": "PT001",
					"ProName": "Nhẫn KC Trắng 14K",
					"ProTypeID": "NHAN",

					"DiamondID": "NATDIF03",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 10,
					"WagePrice": "400000.00",
					"Currency": "VND",

				},
				{
					"ProductID": "PT002",
					"ProName": "Nhẫn KC Vàng 24K",
					"ProTypeID": "NHAN",

					"DiamondID": "NATDVVS104",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 30,
					"WagePrice": "500000.00",
					"Currency": "VND",

					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 50,
					"WagePrice": "500000.00",
					"Currency": "VND",

				},
				{
					"ProductID": "PT005",
					"ProName": "Nhẫn KC Trắng 9k",
					"ProTypeID": "NHAN",

				},
				{
					"ProductID": "PT006",
					"ProName": "Nhẫn KC Trắng 18k",
					"ProTypeID": "NHAN",
					"GoldID": "TRANG18K03",
					"DiamondID": "NATFVS203",

					"DiaSmallQuantity": 30,
					"WagePrice": "300000.00",
					"Currency": "VND",

				},
				




				//CHUYEN
				{
					"ProductID": "PT011",

				},
				{
					"ProductID": "PT015",
					"ProName": "Dây chuyền KC Trắng 10K",

					"GoldID": "TRANG10K04",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 40,
					"WagePrice": "700000.00",
					"Currency": "VND",

				},
				{
					"ProductID": "PT016",
					"ProName": "Dây chuyền KC Trắng 8K ",
					"ProTypeID": "CHUYEN",
					"GoldID": "TRANG8K03",
					"DiamondID": "NATFVVS103",
					"DiamondSmallID": "NATE02",
					"DiaSmallQuantity": 25,
					"WagePrice": "300000.00",
					"Currency": "VND",

					"DiamondID": "NATJVVS203",
					"DiamondSmallID": "NATJ02",
					"DiaSmallQuantity": 40,
					"WagePrice": "600000.00",
					"Currency": "VND",

				},
				{
					"ProductID": "PT018",
					"ProName": "Dây chuyền KC Trắng 8K",
					"ProTypeID": "CHUYEN",
					"GoldID": "TRANG8K05",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 45,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/032023/QSN0450ANW.WG06A/day-chuyen-cz-QSN0450ANW-WG06A-g1.jpg"
				},
				{
					"ProductID": "PT019",
					"ProName": "Dây chuyền KC Vàng 24K",
					"ProTypeID": "CHUYEN",
					"GoldID": "VANG24K04",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATF02",

				},
				{
					"ProductID": "PT023",
					"ProName": "Vòng tay KC Vàng 10K",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG10K05",
					"DiamondID": "NATDVVS203",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 20,
					"WagePrice": "300000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/102023/DBR0043BBW.RG20A/lac-tay-da-mau-DBR0043BBW-RG20A-g1.jpg"
				},
				{
					"ProductID": "PT024",
					"ProName": "Vòng tay KC Trắng 14K",
					"ProTypeID": "VONGTAY",
					"GoldID": "TRANG14K05",
					"DiamondID": "NATFVVS103",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 35,
					"WagePrice": "400000.00",
					"Currency": "VND",

				},
				{
					"ProductID": "PT025",
					"ProName": "Vòng tay KC Vàng 14K",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG14K05",
					"DiamondID": "NATDVVS203",
					"DiamondSmallID": "NATD01",

				},
				{
					"ProductID": "PT027",
					"ProName": "Vòng tay KC Vàng 24K",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG24K03",
					"DiamondID": "NATDFVVS202",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 80,
					"WagePrice": "700000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/072021/Image_Rapper_Most_Impresstive/Z1B.VBR0336B-WY/lac-tay-cz-Z1B-VBR0336B-WY-g1.jpg"
				},
				{
					"ProductID": "PT028",
					"ProName": "Vòng tay KC Trắng 18K",
					"ProTypeID": "VONGTAY",
					"GoldID": "TRANG18K03",
					"DiamondID": "NATFVS203",

				},
				{
					"ProductID": "PT029",
					"ProName": "Vòng tay KC Trắng 10K",
					"ProTypeID": "VONGTAY",
					"GoldID": "TRANG10K03",
					"DiamondID": "NATFVS103",
					"DiamondSmallID": "NATE02",
					"DiaSmallQuantity": 35,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/102022/DBL0053BBW.WG01A/vong-tay-kim-cuong-DBL0053BBW-WG01A-g1.jpg"
				},
				{
					"ProductID": "PT030",
					"ProName": "Vòng tay KC Trắng 9K",
					"ProTypeID": "VONGTAY",
					"GoldID": "TRANG9K03",
					"DiamondID": "NATDIF03",
					"DiamondSmallID": "NATE01",
					"DiaSmallQuantity": 35,
					"WagePrice": "600000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/022023/DBL0052ABW.WG01A/vong-tay-kim-cuong-DBL0052ABW-WG01A-g1.jpg"
				},
				

				//BONGTAI
				{
					"ProductID": "PT031",
					"ProName": "Bông tai KC Trắng 14K",
					"ProTypeID": "BONGTAI",
					"GoldID": "TRANG14K05",
					"DiamondID": "NATEVS203",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 45,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://locphuc.com.vn/Content/Images/Product/DFH0005E-68062-02724/K3B-DFH0005E-YG-thumbnail.jpg"
				},
				{
					"ProductID": "PT032",
					"ProName": "Bông tai KC Vàng 14K ",
					"ProTypeID": "BONGTAI",
					"GoldID": "VANG14K04",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATF01",
					"DiaSmallQuantity": 25,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://locphuc.com.vn/Content/Images/Product/QI0001E-62488-0000/Bong-tai-da-mau-QI0001E-62488-0000-g1.jpg"
				},
				{
					"ProductID": "PT033",
					"ProName": "Bông tai KC Vàng Ý 18K ",
					"ProTypeID": "BONGTAI",
					"GoldID": "VANGY18K05",
					"DiamondID": "NATFVVS103",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 60,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://locphuc.com.vn/Content/Images/Product/DEA0019E-7395-03552/DEA0019E-7395-03552-thumbnail-hover.jpg"
				},				
				{
					"ProductID": "PT034",
					"ProName": "Bông tai KC Vàng 10K",
					"ProTypeID": "BONGTAI",
					"GoldID": "VANG10K06",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATD01",
					"DiaSmallQuantity": 40,
					"WagePrice": "100000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/trang-suc-cao-cap/bong-tai/bong-tai-f1b-dea0012e-481"
				},
				{
					"ProductID": "PT035",
					"ProName": "Bông tai KC Vàng 9K",
					"ProTypeID": "BONGTAI",
					"GoldID": "VANG9K05",
					"DiamondID": "NATEVS103",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 30,
					"WagePrice": "100000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/Product/San-pham-lan-21/Bong-tai-da-mau-vang-hong-18K-DFH0005E-D468-g1.jpg"
				},
				{
					"ProductID": "PT036",
					"ProName": "Bông tai KC Trắng 24K",
					"ProTypeID": "BONGTAI",
					"GoldID": "TRANG24K03",
					"DiamondID": "NATEVS103",
					"DiamondSmallID": "NATD01",
					"DiaSmallQuantity": 45,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/052024/DFH0190AEWWG.01/bong-tai-kim-cuong-DFH0190AEWWG-01-g1.jpg"
				},
				{
					"ProductID": "PT037",
					"ProName": "Bông tai KC Trắng 18K",
					"ProTypeID": "BONGTAI",
					"GoldID": "TRANG18K03",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATD01",
					"DiaSmallQuantity": 25,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/042023/DSR0625CEW.WG01A/bong-tai-kim-cuong-DSR0625CEW-WG01A-g1.jpg"
				},
				{
					"ProductID": "PT038",
					"ProName": "Bông tai KC Trắng 9K ",
					"ProTypeID": "BONGTAI",
					"GoldID": "VANGY9K03",
					"DiamondID": "NATDVVS203",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 60,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://locphuc.com.vn/Content/Images/042023/DMP0170AEW.WG01A/bong-tai-kim-cuong-DMP0170AEW-WG01A-g1.jpg"
				},
				{
					"ProductID": "PT039",
					"ProName": "Bông tai KC Trắng 10K ",
					"ProTypeID": "BONGTAI",
					"GoldID": "TRANG10K03",
					"DiamondID": "NATEVS203",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 30,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://locphuc.com.vn/Content/Images/022024/DEA0409AEW.WG01A/bong-tai-kim-cuong-DEA0409AEW-WG01A-g1.jpg"
				},
				{
					"ProductID": "PT040",
					"ProName": "Bông tai KC Trắng 8K ",
					"ProTypeID": "BONGTAI",
					"GoldID": "TRANG8K05",
					"DiamondID": "NATFVS103",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 40,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://locphuc.com.vn/Content/Images/022024/K3B.QSN0332E/bong-tai-kim-cuong-K3B-QSN0332E-g1.jpg"
				},		
				
				
				
				
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Products", "https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-kim-cuong-5.jpg", {});
	},
};
