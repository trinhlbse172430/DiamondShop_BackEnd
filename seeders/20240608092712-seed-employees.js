"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Employee",
			[
				{
					EmployeeID: "EMP001",
					EmpName: "Nguyễn Văn A",
					EmpAddress: "123 Đường A, Quận B",
					EmpPhone: "0123456789",
					EmpBirth: new Date("1980-01-01"),
					EmpGmail: "nguyenvana@example.com",
					EmpStatus: true,
					EmpNote: "Nhân viên kinh doanh",
				},
				{
					EmployeeID: "EMP002",
					EmpName: "Trần Thị B",
					EmpAddress: "456 Đường C, Quận D",
					EmpPhone: "0987654321",
					EmpBirth: new Date("1990-02-01"),
					EmpGmail: "tranthib@example.com",
					EmpStatus: true,
					EmpNote: "Nhân viên vận chuyển",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Employee", null, {});
	},
};
