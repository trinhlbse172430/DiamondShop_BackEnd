"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Diamonds",
			[	
				//NATDIF
				{
					"DiamondID": "NATDIF09",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0001",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDIF08",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0002",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDIF07",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0003",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDIF06",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0004",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDIF05",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0005",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDIF04",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0006",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDIF03",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0007",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				


				//NATDVS1
				{
					"DiamondID": "NATDVS109",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0008",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS108",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0009",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS107",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0010",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS106",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0011",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS105",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0012",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS104",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0013",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS103",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0014",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				


				//NATDVS2
				{
					"DiamondID": "NATDVS209",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0015",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS208",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0016",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS207",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0017",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS206",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0018",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS205",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0019",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS204",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0020",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS203",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0021",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				


				//NATDVVS1
				{
					"DiamondID": "NATDVVS109",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0022",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS108",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0023",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS107",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0024",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS106",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0025",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS105",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0026",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS104",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0027",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS103",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0028",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				


				//NATDVVS2
				{
					"DiamondID": "NATDVVS209",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0029",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS208",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0030",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS207",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0031",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS206",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0032",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS205",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0033",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS204",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0034",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVVS203",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0035",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				


				//NATEIF
				{
					"DiamondID": "NATEIF09",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0036",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEIF08",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0037",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEIF07",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0038",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEIF06",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0039",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEIF05",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0040",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEIF04",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0041",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEIF03",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0042",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				


				
				//NATEVS1
				{
					"DiamondID": "NATEVS109",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0043",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS108",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0044",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS107",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0045",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS106",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0046",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS105",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0047",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS104",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0048",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS103",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0049",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				



				//NATEVS2
				{
					"DiamondID": "NATEVS209",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0050",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS208",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0051",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS207",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0052",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS206",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0053",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS205",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0054",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS204",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0055",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVS203",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0056",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				



				//NATEVVS1
				{
					"DiamondID": "NATEVVS109",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0057",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS108",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0058",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS107",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0059",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS106",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0060",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS105",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0061",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS104",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0062",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS103",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0063",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				



				//NATEVVS2
				{
					"DiamondID": "NATEVVS209",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0064",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS208",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0065",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS207",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0066",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS206",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0067",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS205",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0068",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS204",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0069",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATEVVS203",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0070",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				
				


				//NATFIF
				{
					"DiamondID": "NATFIF09",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0071",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFIF08",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0072",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFIF07",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0073",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFIF06",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0074",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFIF05",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0075",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFIF04",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0076",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFIF03",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0077",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				


				//NATFVS1
				{
					"DiamondID": "NATFVS109",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0078",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS108",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0079",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS107",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0080",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS106",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0081",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS105",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0082",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS104",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0083",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS103",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0084",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				



				//NATFVS2
				{
					"DiamondID": "NATFVS209",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0085",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS208",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0086",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS207",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0087",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS206",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0088",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS205",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0089",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS204",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0090",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVS203",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0091",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				


				//NATFVVS1
				{
					"DiamondID": "NATFVVS109",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0092",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS108",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0093",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS107",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0094",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS106",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0095",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS105",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0096",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS104",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0097",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS103",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0098",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				



				//NATFVVS2
				{
					"DiamondID": "NATFVVS209",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0099",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS208",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0100",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS207",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0101",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS206",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0102",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS205",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0103",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS204",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0104",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATFVVS203",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0105",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				



				//NATJIF
				{
					"DiamondID": "NATJIF09",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0106",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJIF08",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0107",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJIF07",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0108",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJIF06",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0109",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJIF05",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0110",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJIF04",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0111",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJIF03",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0112",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				


				//NATJVS1
				{
					"DiamondID": "NATJVS109",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0113",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS108",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0114",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS107",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0115",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS106",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0116",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS105",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0117",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS104",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0118",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS103",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0119",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaCut": "Round"
				},
				



				//NATJVS2
				{
					"DiamondID": "NATJVS209",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0120",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS208",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0121",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS207",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0122",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS206",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0123",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS205",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0124",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS204",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0125",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVS203",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0126",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				


				//NATJVVS1
				{
					"DiamondID": "NATJVVS109",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0127",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS108",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0128",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS107",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0129",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS106",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0130",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS105",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0131",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS104",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0132",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS103",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0133",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				



				//NATJVVS2
				{
					"DiamondID": "NATJVVS209",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0134",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS208",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0135",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS207",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0136",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS206",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0137",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS205",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0138",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS204",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0139",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS203",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0140",
					"DiaPicture": "https://dichvu-batdongsan.com/tin-tuc/kim-cuong-mien-phi-da-quy-cua-tinh-yeu-va-su-lap-lanh-cua-dang-cap-3357.html",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Diamonds", null, {});
	},
};
