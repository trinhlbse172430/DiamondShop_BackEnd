"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("DiaOrigins", {
			DiaOriginID: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.CHAR(20),
			},
			DiaOriginName: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		});

		await queryInterface.createTable("DiaColors", {
			DiaColorID: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.CHAR(20),
			},
			DiaColorName: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		});

		await queryInterface.createTable("DiaClarities", {
			DiaClarityID: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.CHAR(20),
			},
			DiaClarityName: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		});

		await queryInterface.createTable("GoldTypes", {
			GoldTypeID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			GoldTypeName: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
		});

		await queryInterface.createTable("GoldAges", {
			GoldAgeID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			GoldAgeName: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
		});

		await queryInterface.createTable("GoldPrices", {
			GoldPriceID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			GoldInputDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			GoldTypeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "GoldTypes",
					key: "GoldTypeID",
				},
			},
			GoldAgeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "GoldAges",
					key: "GoldAgeID",
				},
			},
			GoldWeight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GoldUnit: {
				type: Sequelize.STRING(10),
			},
			GoldPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: Sequelize.STRING(10),
			},
		});

		await queryInterface.createTable("Golds", {
			GoldID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			GoldPicture: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			GoldTypeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "GoldTypes",
					key: "GoldTypeID",
				},
			},
			GoldAgeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "GoldAges",
					key: "GoldAgeID",
				},
			},
			GoldWeight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GoldUnit: {
				type: Sequelize.STRING(10),
			},
		});

		await queryInterface.createTable("DiaPrices", {
			DiaPriceID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			DiaInputDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			DiaOriginID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaOrigins",
					key: "DiaOriginID",
				},
			},
			DiaWeight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			DiaUnit: {
				type: Sequelize.STRING(10),
				allowNull: false,
			},
			DiaColorID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaColors",
					key: "DiaColorID",
				},
			},
			DiaClarityID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaClarities",
					key: "DiaClarityID",
				},
			},
			DiaPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: Sequelize.STRING(10),
			},
		});

		// await queryInterface.createTable("GIALists", {
		// 	GIAID: {
		// 		type: Sequelize.CHAR(10),
		// 		primaryKey: true,
		// 	},
		// 	GIAPicture: {
		// 		type: Sequelize.TEXT,
		// 	},
		// 	Origin: {
		// 		type: Sequelize.STRING(20),
		// 		allowNull: false,
		// 	},
		// 	Weight: {
		// 		type: Sequelize.FLOAT,
		// 		allowNull: false,
		// 	},
		// 	DiaUnit: {
		// 		type: Sequelize.STRING(10),
		// 	},
		// 	Color: {
		// 		type: Sequelize.CHAR(10),
		// 		allowNull: false,
		// 	},
		// 	Clarity: {
		// 		type: Sequelize.CHAR(10),
		// 		allowNull: false,
		// 	},
		// 	Cut: {
		// 		type: Sequelize.CHAR(10),
		// 		allowNull: false,
		// 	},
		// });

		await queryInterface.createTable("Diamonds", {
			DiamondID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			GIAID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
			},
			DiaPicture: {
				type: Sequelize.TEXT,
			},
			GIAPicture: {
				type: Sequelize.TEXT,
			},
			DiaOriginID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaOrigins",
					key: "DiaOriginID",
				},
			},
			DiaWeight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			DiaUnit: {
				type: Sequelize.STRING(10),
				allowNull: false,
			},
			DiaColorID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaColors",
					key: "DiaColorID",
				},
			},
			DiaClarityID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaClarities",
					key: "DiaClarityID",
				},
			},
			DiaCut: {
				type: Sequelize.CHAR(10),
				allowNull: false,
			},
		});

		await queryInterface.createTable("DiaSmallPrices", {
			DiaSmallPriceID: {
				type: Sequelize.CHAR(50),
				primaryKey: true,
			},
			DiaSmallInputDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			DiaSmallOriginID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaOrigins",
					key: "DiaOriginID",
				},
			},
			DiaSmallWeight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			DiaSmallUnit: {
				type: Sequelize.STRING(10),
			},
			DiaSmallColorID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaColors",
					key: "DiaColorID",
				},
			},
			DiaSmallPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: Sequelize.STRING(10),
			},
		});

		await queryInterface.createTable("DiamondSmalls", {
			DiaSmallID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			DiaSmallPicture: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			DiaSmallWeight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			DiaSmallUnit: {
				type: Sequelize.STRING(10),
			},
			DiaSmallOriginID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaOrigins",
					key: "DiaOriginID",
				},
			},
			DiaSmallColorID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaColors",
					key: "DiaColorID",
				},
			},
		});

		await queryInterface.createTable("ProTypes", {
			ProTypeID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			ProTypeName: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
		});

		await queryInterface.createTable("Products", {
			ProductID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			ProName: {
				type: Sequelize.STRING(255),
			},
			ProTypeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "ProTypes",
					key: "ProTypeID",
				},
			},
			GoldID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "Golds",
					key: "GoldID",
				},
			},
			DiamondID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "Diamonds",
					key: "DiamondID",
				},
			},
			DiamondSmallID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "DiamondSmalls",
					key: "DiaSmallID",
				},
			},
			DiaSmallQuantity: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			WagePrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: Sequelize.STRING(10),
			},
			Ration: {
				type: Sequelize.FLOAT,
			},
			ProPicture: {
				type: Sequelize.TEXT,
			},
		});

		await queryInterface.createTable("Customers", {
			CustomerID: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			CusPhone: {
				type: Sequelize.CHAR(10),
				allowNull: false,
			},
			CusName: {
				type: Sequelize.STRING(40),
				allowNull: false,
			},
			CusPoint: {
				type: Sequelize.INTEGER,
			},
			CusPassword: {
				type: Sequelize.STRING(40),
				allowNull: false,
			},
			CusUsername: {
				type: Sequelize.STRING(40),
				allowNull: false,
			},
			CusEmail: {
				type: Sequelize.STRING(40),
				allowNull: false,
			},
		});

		await queryInterface.createTable("BonusPoints", {
			BonusPointID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			StartDisDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			EndDisDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			MinPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			MaxPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			Point: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
		});

		await queryInterface.createTable("Promotions", {
			PromotionID: {
				type: Sequelize.STRING(10),
				primaryKey: true,
			},
			PromotionName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			PromStartDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			PromEndDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			PromPercent: {
				type: Sequelize.DOUBLE,
				allowNull: false,
			},
		});

		await queryInterface.createTable("Employees", {
			EmployeeID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			EmpName: {
				type: Sequelize.STRING(40),
				allowNull: false,
			},
			EmpAddress: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			EmpPhone: {
				type: Sequelize.STRING(10),
				allowNull: false,
			},
			EmpBirthDay: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			EmpUserName: {
				type: Sequelize.STRING(40),
				allowNull: false,
			},
			EmpGmail: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			EmpStatus: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			EmpNote: {
				type: Sequelize.STRING(200),
			},
			EmpPassword: {
				type: Sequelize.STRING(40),
			},
		});

		await queryInterface.createTable("Functions", {
			FunctionID: {
				type: Sequelize.CHAR(20),
				primaryKey: true,
			},
			FunctionName: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		});

		await queryInterface.createTable("Roles", {
			RoleID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			RoleName: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			EmployeeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "Employees",
					key: "EmployeeID",
				},
			},
			FunctionID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "Functions",
					key: "FunctionID",
				},
			},
		});

		await queryInterface.createTable("Orders", {
			OrderID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			SaleDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			CusPhone: {
				type: Sequelize.CHAR(10),
				allowNull: false,
			},
			CusName: {
				type: Sequelize.STRING(40),
				allowNull: false,
			},
			CusAddress: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},

			TotalDetailPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			DiscountPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			TotalPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			ShipPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			PayBeforePrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: Sequelize.STRING(10),
			},
			BonusPointID: {
				type: Sequelize.CHAR(10),
				references: {
					model: "BonusPoints",
					key: "BonusPointID",
				},
			},
			OrderPoint: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			PromotionID: {
				type: Sequelize.STRING(10),
				references: {
					model: "Promotions",
					key: "PromotionID",
				},
			},
			CustomerID: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Customers",
					key: "CustomerID",
				},
			},
			EmployeeIDShip: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "Employees",
					key: "EmployeeID",
				},
			},
			OrdNote: {
				type: Sequelize.STRING(400),
			},
			OrdStatus: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
		});

		await queryInterface.createTable("OrderDetails", {
			OrderDetailID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			OrderID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "Orders",
					key: "OrderID",
				},
			},
			ProductID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "Products",
					key: "ProductID",
				},
			},
			Quantity: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			GoldPriceID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "GoldPrices",
					key: "GoldPriceID",
				},
			},
			DiaPriceID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "DiaPrices",
					key: "DiaPriceID",
				},
			},
			DiaSmallPriceID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "DiaSmallPrices",
					key: "DiaSmallPriceID",
				},
			},
			SalePrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: Sequelize.STRING(10),
			},
			CusSize: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
		});

		await queryInterface.createTable("Payments", {
			PaymentID: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			InputDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			InputEmployeeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "Employees",
					key: "EmployeeID",
				},
			},
			OrderID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "Orders",
					key: "OrderID",
				},
			},
			PayType: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			Pay: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: Sequelize.STRING(10),
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Payments");
		await queryInterface.dropTable("OrderDetails");
		await queryInterface.dropTable("Orders");
		await queryInterface.dropTable("Roles");
		await queryInterface.dropTable("Functions");
		await queryInterface.dropTable("Employees");
		await queryInterface.dropTable("Promotions");
		await queryInterface.dropTable("BonusPoints");
		await queryInterface.dropTable("Customers");
		await queryInterface.dropTable("Products");
		await queryInterface.dropTable("ProTypes");
		await queryInterface.dropTable("DiamondSmalls");
		await queryInterface.dropTable("DiaSmallPrices");
		await queryInterface.dropTable("Diamonds");
		await queryInterface.dropTable("GIALists");
		await queryInterface.dropTable("DiaPrices");
		await queryInterface.dropTable("Golds");
		await queryInterface.dropTable("GoldPrices");
		await queryInterface.dropTable("GoldAges");
		await queryInterface.dropTable("GoldTypes");
		await queryInterface.dropTable("DiaOrigins");
		await queryInterface.dropTable("DiaColors");
		await queryInterface.dropTable("DiaClarities");
	},
};
