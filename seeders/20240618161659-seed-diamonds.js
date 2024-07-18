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
					"DiaPicture": "picture",
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
					"DiaPicture": "picture",
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
					"DiaPicture": "picture",
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
					"DiaPicture": "picture",
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
					"DiaPicture": "picture",
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
					"DiaPicture": "picture",
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
					"DiaPicture": "picture",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				


				//NATDVS1
				{
n
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0014",
					"DiaPicture": "picture",
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
					"GIAID": "GIA003",
					"DiaPicture": "picture",
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
					"GIAID": "GIA004",
					"DiaPicture": "picture",
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
					"GIAID": "GIA005",
					"DiaPicture": "picture",
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
					"GIAID": "GIA006",
					"DiaPicture": "picture",
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
					"GIAID": "GIA007",
					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATDVS208",

					"DiaPicture": "picture",
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
					"DiaPicture": "picture",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",

					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",

					"DiaClarityID": "VVS2",
					"DiaCut": "Round"
				},
				{

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaCut": "Round"
				},
				{
					"DiamondID": "NATJVVS108",

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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

					"DiaPicture": "picture",
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
