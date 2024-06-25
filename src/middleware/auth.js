const jwt = require("jsonwebtoken");
const { forbidden, unauthorized } = require("../handlers/response_handler");
const { ACCESS_TOKEN_SECRET } = require("../../variables/global");

const generateToken = (userData) => {
	const token = jwt.sign(userData, ACCESS_TOKEN_SECRET, { expiresIn: "0.5h" });
	return token;
};

const refreshToken = (token) => {
	const decoded = jwt.decode(token);
	if (!decoded || !decoded.exp) {
		return null;
	}

	const expirationTime = decoded.exp;
	const currentTimestamp = Math.floor(Date.now() / 1000);
	const timeDifference = expirationTime - currentTimestamp;

	if (timeDifference > 4 * 3600) {
		return "login_required";
	} else if (timeDifference <= 0) {
		const userData = decoded.data;
		const newToken = generateToken(userData);
		return newToken;
	} else {
		return null;
	}
};

const checkAuthAndRole = (requiredRole) => {
	return (req, res, next) => {
		const token = req.headers.authorization;

		if (!token) {
			return unauthorized(res);
		}

		jwt.verify(token, SECRET_KEY, (err, decoded) => {
			if (err) {
				return forbidden(res);
			} else {
				const newToken = refreshToken(token);
				if (newToken === "login_required") {
					return unauthorized(res);
				} else {
					req.headers.authorization = newToken;
					const currentTimestamp = Math.floor(Date.now() / 1000);
					if (decoded.exp && decoded.exp < currentTimestamp) {
						return unauthorized(res);
					}
					const userRole = decoded.roleId;

					if (requiredRole?.includes(userRole)) {
						req.userRole = userRole;
						next();
					} else {
						return forbidden(res);
					}
				}
			}
		});
	};
};

module.exports = {
	checkAuthAndRole,
	generateToken,
	refreshToken,
};
