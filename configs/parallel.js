const path = require('path');

module.exports = {
	default: {
		parallel: 4,
		format: [path.resolve(__dirname, './reporter.js')],
	}
}