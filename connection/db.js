const db = require("../models");

const connectionMySQL = async () => {
	const { sequelize } = db;
	await sequelize.sync({ force: false });
	sequelize
		.authenticate()
		.then(() => console.log("Database connection has been established successfully."))
		.catch((err) => console.error("Unable to connect to the database:", err));
};

module.exports = {
	connectionMySQL,
};
