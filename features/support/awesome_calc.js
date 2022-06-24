const { Then } = require('@cucumber/cucumber')
const { expect } = require('chai')
const calc = require('../../src/index')

Then(/^(\d+) \+ (\d+) = (\d+)$/, (a, b, res) => {
	expect(calc('+', a, b)).to.equal(res)
})

Then(/^(\d+) - (\d+) = (\d+)$/, (a, b, res) => {
	expect(calc('-', a, b)).to.equal(res)
})

Then(/^(\d+) \* (\d+) = (\d+)$/, (a, b, res) => {
	expect(calc('*', a, b)).to.equal(res)
})

Then(/^(\d+) \/ (\d+) = (\d+)$/, (a, b, res) => {
	expect(calc('/', a, b)).to.equal(res)
})