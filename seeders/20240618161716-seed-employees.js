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
					"EmpBirthDay": "1987-10-01",
					"EmpUserName": "admin",
					"EmpGmail": "emp001@gmail.com",
					"EmpStatus": true,
					"EmpNote": "admin",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP002",
					"EmpName": "nhân viên bán hàng 1",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0888888888",
					"EmpBirthDay": "1999-11-12",
					"EmpUserName": "saler1",
					"EmpGmail": "emp002@gmail.com",
					"EmpStatus": true,
					"EmpNote": "bán hàng",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP003",
					"EmpName": "nhân viên bán hàng 2",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0777777777",
					"EmpBirthDay": "2003-11-13",
					"EmpUserName": "saler2",
					"EmpGmail": "emp003@gmail.com",
					"EmpStatus": 2,
					"EmpNote": "bán hàng",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP004",
					"EmpName": "nhân viên giao hàng 1",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0666666666",
					"EmpBirthDay": "2002-06-18",
					"EmpUserName": "shipper1",
					"EmpGmail": "emp004@gmail.com",
					"EmpStatus": true,
					"EmpNote": "giao hàng",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP005",
					"EmpName": "nhân viên giao hàng 2",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "05555555555",
					"EmpBirthDay": "2001-06-19",
					"EmpUserName": "shipper2",
					"EmpGmail": "emp005@gmail.com",
					"EmpStatus": true,
					"EmpNote": "giao hàng",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP006",
					"EmpName": "NHAN VIEN GIAO HANG 3",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0444444444",
					"EmpBirthDay": "2000-06-19",
					"EmpUserName": "shipper3",
					"EmpGmail": "emp006@gmail.com",
					"EmpStatus": true,
					"EmpNote": "giao hàng",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP007",
					"EmpName": "quản lí",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0333333333",
					"EmpBirthDay": "1991-06-04",
					"EmpUserName": "manager",
					"EmpGmail": "emp007@gmail.com",
					"EmpStatus": true,
					"EmpNote": "quản lí",
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
