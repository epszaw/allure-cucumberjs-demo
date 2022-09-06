const path = require('path')
// TODO:
// const { createTestplanFilter } = require('allure-cucumberjs')

module.exports = {
	default: {
		format: [path.resolve(__dirname, './reporter.js')],
	}
}
