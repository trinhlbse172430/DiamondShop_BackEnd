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
					"GoldID": "TRANG14K02",
					"DiamondID": "NATDIF03",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 10,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://caohungdiamond.com/wp-content/uploads/2022/02/30.800.jpg"
				},
				{
					"ProductID": "PT002",
					"ProName": "Nhẫn KC Vàng 24K",
					"ProTypeID": "NHAN",
					"GoldID": "VANG24K03",
					"DiamondID": "NATDVVS104",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 30,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://caohungdiamond.com/wp-content/uploads/2022/05/74.png"
				},
				{
					"ProductID": "PT003",
					"ProName": "Nhẫn KC Vàng 14K",
					"ProTypeID": "NHAN",
					"GoldID": "VANG14K03",
					"DiamondID": "NATDVVS105",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 50,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://caohungdiamond.com/wp-content/uploads/2022/12/nhan-kim-cuong-nam-vang-trang-18k-ch-n036-lich-lam.jpg"
				},
				{
					"ProductID": "PT004",
					"ProName": "Nhẫn KC Vàng 8K ",
					"ProTypeID": "NHAN",
					"GoldID": "VANG8K02",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATD01",
					"DiaSmallQuantity": 50,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://caohungdiamond.com/wp-content/uploads/2022/12/nhan-kim-cuong-nam-vang-trang-18k-ch-n026-lich-lam.jpg"
				},
				{
					"ProductID": "PT005",
					"ProName": "Nhẫn KC Trắng 9k",
					"ProTypeID": "NHAN",
					"GoldID": "TRANG9K04",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATJ02",
					"DiaSmallQuantity": 4,
					"WagePrice": "300000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://caohungdiamond.com/wp-content/uploads/2022/02/30.800.jpg"
				},
				{
					"ProductID": "PT006",
					"ProName": "Nhẫn KC Trắng 18k",
					"ProTypeID": "NHAN",
					"GoldID": "TRANG18K03",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATJ02",
					"DiaSmallQuantity": 10,
					"WagePrice": "300000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://caohungdiamond.com/wp-content/uploads/2020/12/24-2.png"
				},
				{
					"ProductID": "PT007",
					"ProName": "Nhẫn KC Vàng 18k",
					"ProTypeID": "NHAN",
					"GoldID": "VANG18K04",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATJ01",
					"DiaSmallQuantity": 4,
					"WagePrice": "300000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://caohungdiamond.com/wp-content/uploads/2023/03/94.200x.jpg"
				},
				{
					"ProductID": "PT009",
					"ProName": "Nhẫn KC Vàng 10k",
					"ProTypeID": "NHAN",
					"GoldID": "VANG10K03",
					"DiamondID": "NATEVS203",
					"DiamondSmallID": "NATJ02",
					"DiaSmallQuantity": 6,
					"WagePrice": "300000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://caohungdiamond.com/wp-content/uploads/2020/12/35-2.png"
				},
				{
					"ProductID": "PT010",
					"ProName": "Nhẫn KC Vàng Ý 24k",
					"ProTypeID": "NHAN",
					"GoldID": "VANGY24K03",
					"DiamondID": "NATEVS103",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 30,
					"WagePrice": "300000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://caohungdiamond.com/wp-content/uploads/2021/07/9-2.png"
				},
				




				//CHUYEN
				{
					"ProductID": "PT011",
					"ProName": "Dây chuyền KC Trắng 14K",
					"ProTypeID": "CHUYEN",
					"GoldID": "TRANG14K03",
					"DiamondID": "NATDVVS204",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 30,
					"WagePrice": "6000000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://locphuc.com.vn/Content/Images/052024/DMP0237ANW.WG01A/day-chuyen-kim-cuong-DMP0237ANW-WG01A-g3.jpg"
				},
				{
					"ProductID": "PT012",
					"ProName": "Dây chuyền KC Trắng 24K",
					"ProTypeID": "CHUYEN",
					"GoldID": "TRANG24K03",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATE02",
					"DiaSmallQuantity": 30,
					"WagePrice": "1100000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/042022/DFH0135BMW.WG01A/vo-mat-day-chuyen-kim-cuong-DFH0135BMW-WG01A-g3.jpg"
				},
				{
					"ProductID": "PT013",
					"ProName": "Dây chuyền KC Trắng 14K",
					"ProTypeID": "CHUYEN",
					"GoldID": "TRANG14K03",
					"DiamondID": "NATJIF03",
					"DiamondSmallID": "NATD01",
					"DiaSmallQuantity": 40,
					"WagePrice": "500000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://locphuc.com.vn/Content/Images/012024/DMP0248ANW.WG01A/day-chuyen-kim-cuong-DMP0248ANW-WG01A-g3.jpg"
				},
				{
					"ProductID": "PT014",
					"ProName": "Dây chuyền KC Trắng 9k",
					"ProTypeID": "CHUYEN",
					"GoldID": "TRANG9K05",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 20,
					"WagePrice": "900000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/Product/DFH0119M-46286-03316/Mat-day-chuyen-kim-cuong-vang-18K-DFH0119M-goc-chuan.jpg"
				},
				{
					"ProductID": "PT015",
					"ProName": "Dây chuyền KC Trắng 10K",
					"ProTypeID": "CHUYEN",
					"GoldID": "TRANG10K04",
					"DiamondID": "NATFVS203",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 40,
					"WagePrice": "700000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/112022/DSR0999AMW.WG01A/vo-mat-day-chuyen-kim-cuong-DSR0999AMW-WG01A-g3.jpg"
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
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/012024/DMP0188ANW.WG01A/day-chuyen-kim-cuong-DMP0188ANW-WG01A-g1.jpg"
				},
				{
					"ProductID": "PT017",
					"ProName": "Dây chuyền KC Trắng 10K",
					"ProTypeID": "CHUYEN",
					"GoldID": "TRANG10K03",
					"DiamondID": "NATJVVS203",
					"DiamondSmallID": "NATJ02",
					"DiaSmallQuantity": 40,
					"WagePrice": "600000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/032023/QSN0457ANW.WG06A/day-chuyen-cz-QSN0457ANW-WG06A-g1.jpg"
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
					"DiaSmallQuantity": 45,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/032022/VBR1008ANU.YW06A/day-chuyen-cz-VBR1008ANU-YW06A-g3.jpg"
				},
				{
					"ProductID": "PT020",
					"ProName": "Dây chuyền KC Vàng 10K",
					"ProTypeID": "CHUYEN",
					"GoldID": "VANG10K04",
					"DiamondID": "NATEVS103",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 45,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/032022/VBR1008ANU.RW06A/day-chuyen-cz-VBR1008ANU-RW06A-g3.jpg"
				},


				//VONGTAY
				{
					"ProductID": "PT021",
					"ProName": "Vòng tay KC Vàng 24K",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG24K08",
					"DiamondID": "NATEIF05",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 45,
					"WagePrice": "100000.00",
					"Currency": "VND",
					"Ration": 110,
					"ProPicture": "https://locphuc.com.vn/Content/Images/122021/DBL0020BBW.RB01A/vong-tay-kim-cuong-DBL0020BBW-RB01A-g2.jpg"
				},
				{
					"ProductID": "PT022",
					"ProName": "Vòng tay KC Trắng 24K",
					"ProTypeID": "VONGTAY",
					"GoldID": "TRANG24K05",
					"DiamondID": "NATDVVS203",
					"DiamondSmallID": "NATF02",
					"DiaSmallQuantity": 10,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/052024/DBR0119ABW.WG01A/lac-tay-kim-cuong-DBR0119ABW-WG01A-g2.jpg"
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
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/122021/DBR0015CBW.WG01A/lac-tay-kim-cuong-DBR0015CBW-WG01A-g2.jpg"
				},
				{
					"ProductID": "PT025",
					"ProName": "Vòng tay KC Vàng 14K",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG14K05",
					"DiamondID": "NATDVVS203",
					"DiamondSmallID": "NATD01",
					"DiaSmallQuantity": 25,
					"WagePrice": "700000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/012023/DBL0041ABW.RG01A/vong-tay-kim-cuong-DBL0041ABW-RG01A-g1.jpg"
				},
				{
					"ProductID": "PT026",
					"ProName": "Vòng tay KC Vàng 24K",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG24K03",
					"DiamondID": "NATFVVS103",
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 25,
					"WagePrice": "700000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/032021/Z1B.VBR0346B-YG/lac-tay-nam-cz-Z1B-VBR0346B-YG-g1.jpg"
				},
				{
					"ProductID": "PT027",
					"ProName": "Vòng tay KC Vàng 24K",
					"ProTypeID": "VONGTAY",
					"GoldID": "VANG24K03",
					"DiamondID": "NATDVVS204",
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
					"DiamondSmallID": "NATD02",
					"DiaSmallQuantity": 35,
					"WagePrice": "400000.00",
					"Currency": "VND",
					"Ration": 120,
					"ProPicture": "https://locphuc.com.vn/Content/Images/052022/VBR0381BBM.WG06B/lac-tay-nam-cz-VBR0381BBM-WG06B-g1.jpg"
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
					"ProPicture": "https://locphuc.com.vn/Content/Images/062023/DMP0140AEW.RG01A/bong-tai-kim-cuong-DMP0140AEW-RG01A-g1.jpg"
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
