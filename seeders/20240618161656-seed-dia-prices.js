"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DiaPrices",
			[	
				// NATDIF
				{
					"DiaPriceID": "NATDIF09",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaPrice": "4800000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDIF08",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaPrice": "1850000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDIF07",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaPrice": "400000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDIF06",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaPrice": "122000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDIF05",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaPrice": "39000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDIF04",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaPrice": "17000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDIF03",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "IF",
					"DiaPrice": "7000000.00",
					"Currency": "VND"
				},
				



				//NATDVS1
				{
					"DiaPriceID": "NATDVS109",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaPrice": "2200000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS108",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaPrice": "1100000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS107",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaPrice": "350000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS106",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaPrice": "78800000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS105",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaPrice": "32000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS104",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaPrice": "1100000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS103",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS1",
					"DiaPrice": "5300000.00",
					"Currency": "VND"
				},


				
				//NATDVS2
				{
					"DiaPriceID": "NATDVS209",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaPrice": "1900000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS208",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaPrice": "980000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS207",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaPrice": "350000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS206",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaPrice": "75000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS205",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaPrice": "31000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS204",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaPrice": "10000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVS203",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VS2",
					"DiaPrice": "2000000.00",
					"Currency": "VND"
				},
				


				//NATDVVS1
				{
					"DiaPriceID": "NATDVVS109",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaPrice": "2800000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS108",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaPrice": "1600000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS107",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaPrice": "380000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS106",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaPrice": "119000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS105",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaPrice": "37000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS104",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaPrice": "14000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS103",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS1",
					"DiaPrice": "6000000.00",
					"Currency": "VND"
				},
				


				//NATDVVS2
				{
					"DiaPriceID": "NATDVVS209",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaPrice": "2700000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS208",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaPrice": "1400000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS207",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaPrice": "330000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS206",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaPrice": "109000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS205",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaPrice": "35000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS204",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaPrice": "13000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATDVVS203",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "D",
					"DiaClarityID": "VVS2",
					"DiaPrice": "4000000.00",
					"Currency": "VND"
				},
				


				//NATEIF
				{
					"DiaPriceID": "NATEIF09",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaPrice": "2900000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEIF08",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaPrice": "368000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEIF07",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaPrice": "322000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEIF06",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaPrice": "276000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEIF05",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaPrice": "38000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEIF04",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaPrice": "15000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEIF03",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "IF",
					"DiaPrice": "3500000.00",
					"Currency": "VND"
				},
				



				//NATEVS1
				{
					"DiaPriceID": "NATEVS109",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaPrice": "2000000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS108",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaPrice": "960000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS107",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaPrice": "350000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS106",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaPrice": "76000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS105",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaPrice": "30000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS104",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaPrice": "10000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS103",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS1",
					"DiaPrice": "400000.00",
					"Currency": "VND"
				},
				



				//NATEVS2
				{
					"DiaPriceID": "NATEVS209",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaPrice": "1800000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS208",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaPrice": "910000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS207",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaPrice": "350000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS206",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaPrice": "73000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS205",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaPrice": "29000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS204",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaPrice": "9000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVS203",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VS2",
					"DiaPrice": "3000000.00",
					"Currency": "VND"
				},
				


				//NATEVVS1
				{
					"DiaPriceID": "NATEVVS109",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaPrice": "2700000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS108",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaPrice": "1480000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS107",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaPrice": "330000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS106",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaPrice": "118000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS105",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaPrice": "35000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS104",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaPrice": "12000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS103",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS1",
					"DiaPrice": "3000000.00",
					"Currency": "VND"
				},
				


				//NATEVVS2
				{
					"DiaPriceID": "NATEVVS209",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaPrice": "2400000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS208",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaPrice": "1200000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS207",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaPrice": "320000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS206",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaPrice": "106000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS205",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaPrice": "414000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS204",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaPrice": "33000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATEVVS203",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "E",
					"DiaClarityID": "VVS2",
					"DiaPrice": "12000000.00",
					"Currency": "VND"
				},
				


				//NATFIF
				{
					"DiaPriceID": "NATFIF09",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaPrice": "2700000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFIF08",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaPrice": "1400000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFIF07",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaPrice": "360000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFIF06",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaPrice": "118000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFIF05",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaPrice": "32000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFIF04",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaPrice": "15000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFIF03",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "IF",
					"DiaPrice": "4000000.00",
					"Currency": "VND"
				},
				



				//NATFVS1
				{
					"DiaPriceID": "NATFVS109",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaPrice": "1900000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS108",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaPrice": "760000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS107",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaPrice": "350000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS106",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaPrice": "74000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS105",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaPrice": "23000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS104",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaPrice": "9000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS103",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaPrice": "2000000.00",
					"Currency": "VND"
				},
				



				//NATFVS2
				{
					"DiaPriceID": "NATFVS209",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaPrice": "1600000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS208",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaPrice": "700000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS207",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaPrice": "330000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS206",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaPrice": "71000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS205",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaPrice": "20000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS204",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS1",
					"DiaPrice": "7500000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVS203",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VS2",
					"DiaPrice": "2000000.00",
					"Currency": "VND"
				},
				


				
				//NATFVVS1
				{
					"DiaPriceID": "NATFVVS109",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaPrice": "2400000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS108",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaPrice": "414000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS107",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaPrice": "1300000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS106",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaPrice": "340000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS105",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaPrice": "116000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS104",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaPrice": "12000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS103",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS1",
					"DiaPrice": "3000000.00",
					"Currency": "VND"
				},
				


				//NATFVVS2
				{
					"DiaPriceID": "NATFVVS209",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaPrice": "2200000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS208",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaPrice": "1000000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS207",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaPrice": "350000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS206",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaPrice": "102000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS205",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaPrice": "26000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS204",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaPrice": "11000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATFVVS203",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "F",
					"DiaClarityID": "VVS2",
					"DiaPrice": "2000000.00",
					"Currency": "VND"
				},
				



				//NATJIF
				{
					"DiaPriceID": "NATJIF09",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaPrice": "879000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJIF08",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaPrice": "420000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJIF07",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaPrice": "170000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJIF06",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaPrice": "118000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJIF05",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaPrice": "25000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJIF04",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaPrice": "12000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJIF03",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "IF",
					"DiaPrice": "2000000.00",
					"Currency": "VND"
				},
				



				//NATJVS2
				{
					"DiaPriceID": "NATJVS209",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaPrice": "742000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS208",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaPrice": "330000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS207",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaPrice": "160000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS206",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaPrice": "58000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS205",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaPrice": "18000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS204",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaPrice": "6000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS203",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS2",
					"DiaPrice": "2000000.00",
					"Currency": "VND"
				},
				


				//NATJVS1
				{
					"DiaPriceID": "NATJVS109",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaPrice": "793300000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS108",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaPrice": "352000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS107",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaPrice": "150000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS106",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaPrice": "62000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS105",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaPrice": "20000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS104",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaPrice": "7000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVS103",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VS1",
					"DiaPrice": "2000000.00",
					"Currency": "VND"
				},
				


				//NATJVVS2
				{
					"DiaPriceID": "NATJVVS209",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaPrice": "839900000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS208",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaPrice": "380000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS207",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaPrice": "150000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS206",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaPrice": "69900000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS205",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaPrice": "24500000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS204",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaPrice": "9000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS203",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS2",
					"DiaPrice": "2000000.00",
					"Currency": "VND"
				},
				


				//NATJVVS1
				{
					"DiaPriceID": "NATJVVS109",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 9,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaPrice": "850000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS108",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 8,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaPrice": "429000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS107",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 7,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaPrice": "160000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS106",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 6,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaPrice": "70000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS105",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 5,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaPrice": "24000000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS104",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 4,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaPrice": "9500000.00",
					"Currency": "VND"
				},
				{
					"DiaPriceID": "NATJVVS103",
					"DiaInputDate": "2024-07-11",
					"DiaOriginID": "NAT",
					"DiaWeight": 3,
					"DiaUnit": "Ly",
					"DiaColorID": "J",
					"DiaClarityID": "VVS1",
					"DiaPrice": "2000000.00",
					"Currency": "VND"
				},
				
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DiaPrices", null, {});
	},
};
