"use strict";
module.exports = (sequelize, DataTypes) => {
	const Payment = sequelize.define(
		"Payments",
		{
			PaymentID: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			InputDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			InputEmployeeID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			OrderID: {
				type: DataTypes.CHAR(10),
				allowNull: false,
			},
			PayType: {
				type: DataTypes.STRING(10),
				allowNull: false,
			},
			Pay: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: DataTypes.STRING(10),
			},
			NotePayment: {
				type: DataTypes.STRING(200),
			},
		},
		{
			tableName: "Payments",
			timestamps: false,
		},
	);

	return Payment;
};
