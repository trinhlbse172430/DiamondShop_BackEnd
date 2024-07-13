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
					"GIAID": "GIA001",
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
					"GIAID": "GIA002",
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
					"DiaClarityID": "IF",
					"DiaCut": "Round"
				},
				


				//NATDVS1
				{
					"DiamondID": "NATDVS109",
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA008",
					"DiaPicture": "picture",
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
					"GIAID": "GIA009",
					"DiaPicture": "picture",
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
					"GIAID": "GIA010",
					"DiaPicture": "picture",
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
					"GIAID": "GIA011",
					"DiaPicture": "picture",
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
					"GIAID": "GIA012",
					"DiaPicture": "picture",
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
					"GIAID": "GIA013",
					"DiaPicture": "picture",
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
					"GIAID": "GIA014",
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
					"GIAID": "GIA015",
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
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA016",
					"DiaPicture": "picture",
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
					"GIAID": "GIA017",
					"DiaPicture": "picture",
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
					"GIAID": "GIA018",
					"DiaPicture": "picture",
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
					"GIAID": "GIA019",
					"DiaPicture": "picture",
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
					"GIAID": "GIA020",
					"DiaPicture": "picture",
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
					"GIAID": "GIA021",
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
					"GIAID": "GIA022",
					"DiaPicture": "picture",
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
					"GIAID": "GIA023",
					"DiaPicture": "picture",
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
					"GIAID": "GIA024",
					"DiaPicture": "picture",
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
					"GIAID": "GIA025",
					"DiaPicture": "picture",
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
					"GIAID": "GIA026",
					"DiaPicture": "picture",
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
					"GIAID": "GIA027",
					"DiaPicture": "picture",
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
					"GIAID": "GIA028",
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
					"GIAID": "GIA029",
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
					"GIAID": "GIA030",
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
					"GIAID": "GIA031",
					"DiaPicture": "picture",
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
					"GIAID": "GIA032",
					"DiaPicture": "picture",
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
					"GIAID": "GIA033",
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
					"GIAID": "GIA034",
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
					"GIAID": "GIA035",
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
					"GIAID": "GIA036",
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
					"GIAID": "GIA037",
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
					"GIAID": "GIA038",
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
					"GIAID": "GIA039",
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
					"GIAID": "GIA040",
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
					"GIAID": "GIA041",
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
					"GIAID": "GIA042",
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
					"GIAID": "GIA043",
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
					"GIAID": "GIA044",
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
					"GIAID": "GIA045",
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
					"GIAID": "GIA046",
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
					"GIAID": "GIA047",
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
					"GIAID": "GIA048",
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
					"GIAID": "GIA049",
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
					"GIAID": "GIA050",
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
					"GIAID": "GIA051",
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
					"GIAID": "GIA052",
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
					"GIAID": "GIA053",
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
					"GIAID": "GIA054",
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
					"GIAID": "GIA055",
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
					"GIAID": "GIA056",
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
					"GIAID": "GIA057",
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
					"GIAID": "GIA058",
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
					"GIAID": "GIA059",
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
					"GIAID": "GIA060",
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
					"GIAID": "GIA061",
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
					"GIAID": "GIA062",
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
					"GIAID": "GIA063",
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
					"GIAID": "GIA064",
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
					"GIAID": "GIA065",
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
					"GIAID": "GIA066",
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
					"GIAID": "GIA067",
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
					"GIAID": "GIA068",
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
					"GIAID": "GIA069",
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
					"GIAID": "GIA070",
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
					"GIAID": "GIA071",
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
					"GIAID": "GIA072",
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
					"GIAID": "GIA073",
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
					"GIAID": "GIA074",
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
					"GIAID": "GIA075",
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
					"GIAID": "GIA076",
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
					"GIAID": "GIA077",
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
					"GIAID": "GIA078",
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
					"GIAID": "GIA079",
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
					"GIAID": "GIA080",
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
					"GIAID": "GIA081",
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
					"GIAID": "GIA082",
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
					"GIAID": "GIA083",
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
					"GIAID": "GIA084",
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
					"GIAID": "GIA085",
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
					"GIAID": "GIA086",
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
					"GIAID": "GIA087",
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
					"GIAID": "GIA088",
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
					"GIAID": "GIA089",
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
					"GIAID": "GIA090",
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
					"GIAID": "GIA091",
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
					"GIAID": "GIA092",
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
					"GIAID": "GIA093",
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
					"GIAID": "GIA094",
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
					"GIAID": "GIA095",
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
					"GIAID": "GIA096",
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
					"GIAID": "GIA097",
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
					"GIAID": "GIA098",
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
					"GIAID": "GIA0100",
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
					"GIAID": "GIA0101",
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
					"GIAID": "GIA0102",
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
					"GIAID": "GIA0103",
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
					"GIAID": "GIA0104",
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
					"GIAID": "GIA0105",
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
					"GIAID": "GIA0106",
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
					"GIAID": "GIA0107",
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
					"GIAID": "GIA0108",
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
					"GIAID": "GIA0109",
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
					"GIAID": "GIA0110",
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
					"GIAID": "GIA0111",
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
					"GIAID": "GIA0112",
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
					"GIAID": "GIA0113",
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
					"GIAID": "GIA0114",
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
					"GIAID": "GIA0115",
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
					"GIAID": "GIA0116",
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
					"GIAID": "GIA0117",
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
					"GIAID": "GIA0118",
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
					"GIAID": "GIA0119",
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
					"GIAID": "GIA0120",
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
					"GIAID": "GIA0121",
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
					"GIAID": "GIA0122",
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
					"GIAID": "GIA0123",
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
					"GIAID": "GIA0124",
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
					"GIAID": "GIA0125",
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
					"GIAID": "GIA0126",
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
					"GIAID": "GIA0127",
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
					"GIAID": "GIA0128",
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
					"GIAPicture": "https://caohungdiamond.com/wp-content/uploads/2023/06/bang-gia-kim-cuong-xac-nhan-GIA.jpg",
					"GIAID": "GIA0129",
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
					"GIAID": "GIA0130",
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
					"GIAID": "GIA0131",
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
					"GIAID": "GIA0132",
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
					"GIAID": "GIA0133",
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
					"GIAID": "GIA0134",
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
					"GIAID": "GIA0135",
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
					"GIAID": "GIA0136",
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
					"GIAID": "GIA0137",
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
					"GIAID": "GIA0138",
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
					"GIAID": "GIA0139",
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
					"GIAID": "GIA0140",
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
					"GIAID": "GIA0141",
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
