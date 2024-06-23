"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Employees",
			[
				{
					EmployeeID: "E01",
					EmpName: "Trần Văn B",
					EmpAddress: "456 Đường XYZ, Quận 2, TP HCM",
					EmpPhone: "0912345678",
					EmpBirthDay: "1990-01-01",
					EmpUserName: "tranvanb",
					EmpGmail: "tranvanb@example.com",
					EmpStatus: true,
					EmpNote: "Nhân viên xuất sắc",
					EmpPassword: "hashedpassword",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Employees", null, {});
	},
};
