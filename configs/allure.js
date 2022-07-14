const path = require('path')
const { createTestplanFilter } = require('allure-cucumberjs')

module.exports = {
	default: {
		parallel: 4,
		format: [path.resolve(__dirname, './reporter.js')],
	}
}