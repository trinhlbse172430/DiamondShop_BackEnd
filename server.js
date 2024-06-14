const express = require("express");
const cors = require("cors");
const privateRouter = require("./src/routes");
const { connectionMySQL } = require("./connection/db");
const cookieParser = require("cookie-parser");
const { BE_PORT, FE_ENDPOINT } = require("./variables/global");

const app = express();

const allowedOrigins = [FE_ENDPOINT];

const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || allowedOrigins.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	optionsSuccessStatus: 200,
};
//connect sql
connectionMySQL();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("Hello hacker lord to the 4user !!!");
});

privateRouter.forEach((route) => app.use(route));

app.listen(BE_PORT, () => {
	console.log(`Server is running on ${BE_PORT}`);
});
