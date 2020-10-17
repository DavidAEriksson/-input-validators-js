module.exports.validateEmail = (email) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

module.exports.validateName = (name) => {
	return /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(
		name
	);
};

module.exports.validatePasswordStrength = (password) => {
	var strongRegex = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
	).test(password);
	var mediumRegex = new RegExp(
		"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
	).test(password);

	if (strongRegex) {
		return { passwordAccepptable: strongRegex, passwordStrength: "strong" };
	} else if (mediumRegex) {
		return { passwordAccepptable: mediumRegex, passwordStrength: "medium" };
	} else return { passwordAccepptable: false, passwordStrength: "weak" };
};

module.exports.validateDateFormatDayMonthYear = (date) => {
	return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
		date
	);
};

module.exports.validateDateFormatYearMonthDay = (date, format) => {
	if (format === 0) {
		return /^\d{4}[\/.]\d{1,2}[\/.]\d{1,2}$/.test(date);
	} else if (format === 1) {
		return /^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date);
	} else if (format === 2) {
		return /(\d{4})-(\d{2})-(\d{2})/.test(date);
	} else {
		return console.error(`Wrong parameter: ${format}. Expected values 0, 1, 2`);
	}
};

//module.exports.validate
