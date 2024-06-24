const { CODE_401, CODE_403, CODE_404, CODE_500 } = require("../messages").handlerMessages;

const responseWithData = (res, statusCode, data) =>
	res.status(statusCode).send({
		statusCode: statusCode,
		data: data,
	});

const ok = (res, message) =>
	responseWithData(res, 200, {
		message,
	});

const created = (res, message) =>
	responseWithData(res, 201, {
		message,
	});

const badRequest = (res, message) =>
	responseWithData(res, 400, {
		message,
	});

const unauthorized = (res) =>
	responseWithData(res, 401, {
		message: CODE_401,
	});

const forbidden = (res) =>
	responseWithData(res, 403, {
		message: CODE_403,
	});

const notfound = (res) =>
	responseWithData(res, 404, {
		message: CODE_404,
	});

const error = (res) =>
	responseWithData(res, 500, {
		message: CODE_500,
	});

module.exports = {
	responseWithData,
	error,
	badRequest,
	ok,
	unauthorized,
	notfound,
	created,
	forbidden,
};
