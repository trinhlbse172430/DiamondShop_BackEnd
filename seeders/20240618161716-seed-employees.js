"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Employees",
			[
				{
					"EmployeeID": "EMP001",
					"EmpName": "admin",
					"EmpAddress": "viet nam",
					"EmpPhone": "0999999999",
					"EmpBirthDay": "2023-10-01",
					"EmpUserName": "admin",
					"EmpGmail": "emp@gmail.com",
					"EmpStatus": true,
					"EmpNote": "khong co",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP002",
					"EmpName": "nhan vien 2",
					"EmpAddress": "viet nam",
					"EmpPhone": "0888888888",
					"EmpBirthDay": "2008-11-12",
					"EmpUserName": "emp2",
					"EmpGmail": "emp2@gmail.com",
					"EmpStatus": true,
					"EmpNote": "khong co",
					"EmpPassword": "123456"
				},
				{
					"EmployeeID": "EMP003",
					"EmpName": "Manager",
					"EmpAddress": "viet nam",
					"EmpPhone": "0777777777",
					"EmpBirthDay": "2008-11-13",
					"EmpUserName": "emp1",
					"EmpGmail": "admin@gmail.com",
					"EmpStatus": 2,
					"EmpNote": "khong co",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP004",
					"EmpName": "NHAN VIEN GIAO HANG 1",
					"EmpAddress": "04 ngõ 67 Chu Văn An",
					"EmpPhone": "0823667838",
					"EmpBirthDay": "2024-06-18",
					"EmpUserName": "giaohang",
					"EmpGmail": "yenduls@gmail.com",
					"EmpStatus": true,
					"EmpNote": "giao hang",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP005",
					"EmpName": "NHAN VIEN GIAO HANG 2",
					"EmpAddress": "05 ngõ 67 Chu Văn An",
					"EmpPhone": "0823667666",
					"EmpBirthDay": "2024-06-19",
					"EmpUserName": "giaohang2",
					"EmpGmail": "giaohang2@gmail.com",
					"EmpStatus": true,
					"EmpNote": "asfd",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP006",
					"EmpName": "NHAN VIEN GIAO HANG 3",
					"EmpAddress": "05 ngõ 67 ádđsa d",
					"EmpPhone": "0823667333",
					"EmpBirthDay": "2024-06-19",
					"EmpUserName": "gh3",
					"EmpGmail": "gh3@gmail.com",
					"EmpStatus": true,
					"EmpNote": "gh3",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP007",
					"EmpName": "sale 2",
					"EmpAddress": "asd sad",
					"EmpPhone": "111111111",
					"EmpBirthDay": "2024-06-22",
					"EmpUserName": "sale2",
					"EmpGmail": "salw3@gmail.com",
					"EmpStatus": true,
					"EmpNote": "",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP008",
					"EmpName": "sale 3",
					"EmpAddress": "asd sad",
					"EmpPhone": "0911111112",
					"EmpBirthDay": "2024-06-04",
					"EmpUserName": "saler3",
					"EmpGmail": "saleee3@gmail.com",
					"EmpStatus": true,
					"EmpNote": "",
					"EmpPassword": "123"
				}
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Employees", null, {});
	},
};
