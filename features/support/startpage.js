const { Given, When, Then, AfterAll, setWorldConstructor } = require('@cucumber/cucumber')
const { ALLURE_METADATA_CONTENT_TYPE, CucumberAllureWorld } = require("allure-cucumberjs")
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
	await this.page.locator('.search-form-home__q').type(query)
})

When(`press submit button`, async function() {
	await this.page.locator('.search-form-home__button-desktop').click()
})

Then(`redirect to results page has happened`, async function() {
	expect(this.page.url()).not.eq('https://www.startpage.com/')
})

Then(`search results have been displayed`, async function() {
	const page = this.page
	const results = await this.page.locator('.w-gl__result.w-gl__desktop__result')

	await this.label("custom_label", "foo")
	await this.epic("epic_name")

	await this.step("example step with attachment inside and anonymous function", async function() {
		const screenshot = await page.screenshot()

		await this.label("nested_custom_label", "bar")
		this.attachment(JSON.stringify({ foo: 'bar' }), 'application/json')
		this.attachment(screenshot.toString(), 'image/png')
	})
	await this.step("exemple step with error inside", async function() {
		throw new Error("error message here")
	})
	await this.step("example step with attachment inside and arrow function", async (step) => {
		const screenshot = await page.screenshot()
		
		await step.label("nested_custom_label", "bar")
		step.attachment(JSON.stringify({ bar: 'baz' }), 'application/json')
		step.attachment(screenshot.toString(), 'image/png')
	})
	
	expect(results.length).not.eq(0)
})