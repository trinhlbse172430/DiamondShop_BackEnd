"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Employees",
			[
				{
					"EmployeeID": "EMP001",
					"EmpName": "admin",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0999999999",
					"EmpBirthDay": "1982-10-01",
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
					"EmpBirthDay": "2001-11-12",
					"EmpUserName": "saler1",
					"EmpGmail": "saler1@gmail.com",
					"EmpStatus": true,
					"EmpNote": "bán hàng",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP003",
					"EmpName": "nhân viên bán hàng 2",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0777777777",
					"EmpBirthDay": "2002-11-13",
					"EmpUserName": "saler2",
					"EmpGmail": "saler2@gmail.com",
					"EmpStatus": true,
					"EmpNote": "bán hàng",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP004",
					"EmpName": "nhân viên giao hàng 1",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0666666666",
					"EmpBirthDay": "1999-06-18",
					"EmpUserName": "delivery1",
					"EmpGmail": "delivery1@gmail.com",
					"EmpStatus": true,
					"EmpNote": "giao hàng",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP005",
					"EmpName": "nhân viên giao hàng 2",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0555555555",
					"EmpBirthDay": "2000-06-19",
					"EmpUserName": "delivery2",
					"EmpGmail": "delivery2@gmail.com",
					"EmpStatus": true,
					"EmpNote": "giao hàng",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP006",
					"EmpName": "nhân viên giao hàng 3",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0444444444",
					"EmpBirthDay": "2003-03-19",
					"EmpUserName": "delivery3",
					"EmpGmail": "delivery3@gmail.com",
					"EmpStatus": true,
					"EmpNote": "giao hàng",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP007",
					"EmpName": "nhân viên giao hàng 4",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0333333333",
					"EmpBirthDay": "1998-06-22",
					"EmpUserName": "delivery4",
					"EmpGmail": "delivery4@gmail.com",
					"EmpStatus": true,
					"EmpNote": "",
					"EmpPassword": "123"
				},
				{
					"EmployeeID": "EMP008",
					"EmpName": "quản lý",
					"EmpAddress": "Việt Nam",
					"EmpPhone": "0222222222",
					"EmpBirthDay": "1988-06-04",
					"EmpUserName": "manager",
					"EmpGmail": "manager@gmail.com",
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
