const { NODE_ENV, DB_USER, DB_NAME, DB_HOST, DB_PASS } = require("../variables/global");

const VARIABLE_VALID =
	NODE_ENV === "production"
		? {
				host: DB_HOST,
				username: DB_USER,
				password: DB_PASS,
				database: DB_NAME,
				dialect: "mysql",
				logging: false,
				seederStorage: "sequelize",
				seederStorageTableName: "SequelizeSeeder",
				timezone: "+07:00",
		  }
		: NODE_ENV === "development"
		? {
				host: DB_HOST,
				username: DB_USER,
				password: DB_PASS,
				database: DB_NAME,
				dialect: "mysql",
				logging: false,
				seederStorage: "sequelize",
				seederStorageTableName: "SequelizeSeeder",
				timezone: "+07:00",
		  }
		: NODE_ENV === "test"
		? {
				host: DB_HOST,
				username: DB_USER,
				password: DB_PASS,
				database: DB_NAME,
				dialect: "mysql",
				logging: false,
				seederStorage: "sequelize",
				seederStorageTableName: "SequelizeSeeder",
				timezone: "+07:00",
		  }
		: null;

module.exports = VARIABLE_VALID;
