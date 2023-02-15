const { Given, When, Then, setWorldConstructor } = require('@cucumber/cucumber')
const { CucumberAllureWorld } = require("allure-cucumberjs")
const { chromium } = require('playwright')
const { expect } = require('chai')

if (process.env.PARALLEL) {
  setWorldConstructor(CucumberAllureWorld)
}

Given(`open {string}`, async function(url) {
	this.browser = await chromium.launch()
	this.page = await this.browser.newPage()
	
	await this.page.goto(url)
})

When(`type {string} to the query input`, async function(query) {
	await this.page.locator('.search-home input[role=searchbox]').type(query)
})

When(`press submit button`, async function() {
	await this.page.locator('.search-home .btns button[type=submit]').click()
})

Then(`redirect to results page has happened`, async function() {
	expect(this.page.url()).not.eq('https://www.startpage.com/')
})

Then(`search results have been displayed`, async function() {
	const page = this.page
	const results = await this.page.locator('.w-gl__result.w-gl__desktop__result')

	this.label("custom_label", "foo")
	this.epic("epic_name")

	await this.step("example step with attachment inside and anonymous function", async function() {
		const screenshot = await page.screenshot()

		this.label("nested_custom_label", "bar")
		this.attach(JSON.stringify({ foo: 'bar' }), 'application/json')
		this.attach(screenshot, 'image/png')
	})
	await this.step("exemple step with error inside", function() {
		throw new Error("error message here")
	})
	await this.step("example step with attachment inside and arrow function", async (step) => {
		const screenshot = await page.screenshot()
		
		step.parameter("param1", "param1_value")
		step.label("nested_custom_label", "bar")
		step.attach(JSON.stringify({ bar: 'baz' }), 'application/json')
		step.attach(screenshot, 'image/png')
	})
	
	expect(results.length).not.eq(0)

	const screenshot = await page.screenshot()

	this.attach(screenshot, 'image/png')

	await this.step("additional first step", async (s1) => {
		s1.attach(JSON.stringify({ bar: 'baz' }), 'application/json')

		await s1.step("additional second step", async (s2) => {
			s2.attach(JSON.stringify({ bar: 'baz' }), 'application/json')

			await s2.step("additional third step", async (s3) => {
				s3.attach(JSON.stringify({ bar: 'baz' }), 'application/json')
			})
		})
	})
	await this.page.close()
})