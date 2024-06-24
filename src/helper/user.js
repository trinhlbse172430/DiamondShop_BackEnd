function omitPassword(user) {
	const { password, ...userWithoutPassword } = user.dataValues;
	return userWithoutPassword;
}

module.exports = { omitPassword };
