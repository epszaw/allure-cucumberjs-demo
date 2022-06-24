const calc = (operator, a, b) => {
	switch (operator) {
		case '+':
			return a + b
		case '-':
			return a - b
		case '*':
			return a * b
		case '/':
			return a / b
	}
}

module.exports = calc