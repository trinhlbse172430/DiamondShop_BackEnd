"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("GoldType", {
			GoldTypeID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			GoldTypeName: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
		});

		await queryInterface.createTable("GoldAge", {
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
			GoldPricesID: {
				type: Sequelize.CHAR(50),
				primaryKey: true,
			},
			GoldInputDate: {
				type: Sequelize.DATE,
				primaryKey: true,
			},
			GoldTypeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "GoldType",
					key: "GoldTypeID",
				},
			},
			GoldAgeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "GoldAge",
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

		await queryInterface.createTable("Gold", {
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
					model: "GoldType",
					key: "GoldTypeID",
				},
			},
			GoldAgeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "GoldAge",
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

		await queryInterface.createTable("DiaOrigin", {
			DiaOriginID: {
				type: Sequelize.CHAR(20),
				primaryKey: true,
			},
			DiaOriginName: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		});

		await queryInterface.createTable("DiaColor", {
			DiaColorID: {
				type: Sequelize.CHAR(20),
				primaryKey: true,
			},
			DiaColorName: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		});

		await queryInterface.createTable("DiaClarity", {
			DiaClarityID: {
				type: Sequelize.CHAR(20),
				primaryKey: true,
			},
			DiaClarityName: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		});

		await queryInterface.createTable("DiaPrices", {
			DiaPricesID: {
				type: Sequelize.CHAR(50),
				primaryKey: true,
			},
			DiaInputDate: {
				type: Sequelize.DATE,
				primaryKey: true,
			},
			DiaOriginID: {
				type: Sequelize.STRING(20),
				allowNull: false,
				references: {
					model: "DiaOrigin",
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
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "DiaColor",
					key: "DiaColorID",
				},
			},
			DiaClarityID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "DiaClarity",
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

		await queryInterface.createTable("Diamond", {
			DiamondID: {
				type: Sequelize.CHAR(50),
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
				type: Sequelize.STRING(20),
				allowNull: false,
				references: {
					model: "DiaOrigin",
					key: "DiaOriginID",
				},
			},
			DiaWeight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			DiaUnit: {
				type: Sequelize.STRING(10),
			},
			DiaColorID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaColor",
					key: "DiaColorID",
				},
			},
			DiaClarityID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "DiaClarity",
					key: "DiaClarityID",
				},
			},
			DiaCut: {
				type: Sequelize.CHAR(10),
				allowNull: false,
			},
		});

		

		await queryInterface.createTable("DiaSmallPrices", {
			DiaSmallPricesID: {
				type: Sequelize.CHAR(50),
				primaryKey: true,
			},
			DiaSmallInputDate: {
				type: Sequelize.DATE,
				primaryKey: true,
			},
			DiaSmallOriginID: {
				type: Sequelize.STRING(20),
				allowNull: false,
				references:{
					model: "DiaOrigin",
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
				references:{
					model: "DiaColor",
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

		await queryInterface.createTable("DiamondSmall", {
			DiaSmallID: {
				type: Sequelize.CHAR(50),
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
				type: Sequelize.STRING(20),
				allowNull: false,
				references:{
					model: "DiaOrigin",
					key: "DiaOriginID",
				},
			},
			DiaSmallColorID: {
				type: Sequelize.STRING(20),
				allowNull: false,	
				references:{		
					model: "DiaColor",
					key: "DiaColorID",
				},
			},
		});

		await queryInterface.createTable("ProType", {
			ProTypeID: {
				type: Sequelize.CHAR(20),
				primaryKey: true,
			},
			ProTypeName: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
		});

		await queryInterface.createTable("Product", {
			ProductID: {
				type: Sequelize.CHAR(30),
				primaryKey: true,
			},
			ProTypeID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: "ProType",
					key: "ProTypeID",
				},
			},
			GoldID: {
				type: Sequelize.CHAR(50),
				allowNull: false,
				references: {
					model: "Gold",
					key: "GoldID",
				},
			},
			DiamondID: {
				type: Sequelize.CHAR(50),
				allowNull: false,
				references: {
					model: "Diamond",
					key: "DiamondID",
				},
			},
			DiamondSmallID: {
				type: Sequelize.CHAR(50),
				allowNull: false,
				references: {
					model: "DiamondSmall",
					key: "DiaSmallID",
				},
			},
			ProPicture: {
				type: Sequelize.TEXT,
				allowNull: true
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
		});

		await queryInterface.createTable("Customer", {
			CustomerID: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			CusName: {
				type: Sequelize.STRING(40),
				allowNull: false,
			},
			CusPhone: {
				type: Sequelize.CHAR(10),
				allowNull: false,
			},
			CusUserName: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			CusUserPassword: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			CusPoint: {
				type: Sequelize.INTEGER,
			},
		});

		await queryInterface.createTable("BonusPoint", {
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

		await queryInterface.createTable("Promotion", {
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

		await queryInterface.createTable("Employee", {
			EmployeeID: {
				type: Sequelize.CHAR(20),
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
			EmpBirth: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			EmpGmail: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			EmpUsername: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			EmpPassword: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			EmpStatus: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			EmpNote: {
				type: Sequelize.STRING(200),
			},
		});

		await queryInterface.createTable("Function",{
			FunctionID:{
				type:Sequelize.CHAR(20),
				allowNull: false,
			},
			FunctionName:{
				type:Sequelize.STRING(50),
				allowNull: false,
			},

		});

		await queryInterface.createTable("Role", {
			RoleID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			FunctionID: {
				type: Sequelize.CHAR(20),
				allowNull: false,
				references: {
					model: 'Function',
					key: 'FunctionID',
				},
			},
			EmployeeID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "Employee",
					key: "EmployeeID",
				},
			},
			RoleName: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
		});

		await queryInterface.createTable("Order", {
			OrderID: {
				type: Sequelize.CHAR(10),
				primaryKey: true,
			},
			SaleDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			CusName: {
				type: Sequelize.STRING(40),
				allowNull: false,
			},
			CusPhone: {
				type: Sequelize.CHAR(10),
				allowNull: false,
			},
			CusAddress: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			CusSize: {
				type: Sequelize.INTEGER,
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
			ShipPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			TotalPrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: Sequelize.STRING(10),
			},
			BonusPointID: {
				type: Sequelize.CHAR(10),
				references: {
					model: "BonusPoint",
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
					model: "Promotion",
					key: "PromotionID",
				},
			},
			CustomerID: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Customer",
					key: "CustomerID",
				},
			},
			EmployeeIDShip: {
				type: Sequelize.CHAR(10),
				allowNull: false,
				references: {
					model: "Employee",
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

		await queryInterface.createTable("OrderDetail", {
			OrderDetailID: {
				type: Sequelize.CHAR(20),
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
				type: Sequelize.CHAR(50),
				allowNull: false,
				references: {
					model: "Product",
					key: "ProductID",
				},
			},
			GoldPricesID: {
				type: Sequelize.CHAR(50),
				allowNull: false,
				references: {
					model: "GoldPrices",
					key: "GoldPricesID",
				},
			},
			DiaPricesID: {
				type: Sequelize.CHAR(50),
				allowNull: false,
				references: {
					model: "DiaPrices",
					key: "DiaPricesID",
				}, 
			},
			DiaSmallPricesID: {
				type: Sequelize.CHAR(50),
				allowNull: false,
				references: {
					model: "DiaSmallPrices",
					key: "DiaSmallPricesID",

				},
			},
			Quantity: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			PriceID: {
				type: Sequelize.CHAR(10),
				allowNull: false,
			},
			SalePrice: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			Currency: {
				type: Sequelize.STRING(10),
			},
		});

		await queryInterface.createTable("Payment", {
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
					model: "Employee",
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
		await queryInterface.dropTable("Payment");
		await queryInterface.dropTable("OrderDetail");
		await queryInterface.dropTable("Order");
		await queryInterface.dropTable("Role");
		await queryInterface.dropTable("Fuction");
		await queryInterface.dropTable("Employee");
		await queryInterface.dropTable("Promotion");
		await queryInterface.dropTable("BonusPoint");
		await queryInterface.dropTable("Customer");
		await queryInterface.dropTable("Product");
		await queryInterface.dropTable("ProType");
		await queryInterface.dropTable("DiamondSmall");
		await queryInterface.dropTable("DiaSmallPrices");
		await queryInterface.dropTable("Diamond");
		await queryInterface.dropTable("DiaPrices");
		await queryInterface.dropTable("DiaOrigin");
		await queryInterface.dropTable("DiaColor");
		await queryInterface.dropTable("DiaClarity");
		await queryInterface.dropTable("Gold");
		await queryInterface.dropTable("GoldPrices");
		await queryInterface.dropTable("GoldAge");
		await queryInterface.dropTable("GoldType");
	},
};
