const { setParallelCanAssign, Then } = require('@cucumber/cucumber')
const { expect } = require('chai')
const calc = require('../../src/index')

Then(/^(\d+) \+ (\d+) = (\d+)$/, (a, b, res) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve(expect(calc('+', a, b)).to.equal(res))
		}, 1500)
	})
})

Then(/^(\d+) - (\d+) = (\d+)$/, (a, b, res) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve(expect(calc('-', a, b)).to.equal(res))
		}, 1500)
	})
})

Then(/^(\d+) \* (\d+) = (\d+)$/, (a, b, res) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve(expect(calc('*', a, b)).to.equal(res))
		}, 1500)
	})
})

Then(/^(\d+) \/ (\d+) = (\d+)$/, (a, b, res) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve(expect(calc('/', a, b)).to.equal(res))
		}, 1500)
	})
})