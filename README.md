# Allure CucumberJS integration

This example demonstrates how works `allure-cucumberjs` integration.

## Installation

1. Create a `cucumberjs` reporter using `allure-js-common` and `allure-cucumberjs` packages:
```js
const { AllureRuntime } = require('allure-js-commons')
const { CucumberJSAllureFormatter } = require('allure-cucumberjs')

module.exports = class extends CucumberJSAllureFormatter {
	constructor(options) {
    super(
      options,
      new AllureRuntime({ resultsDir: "./allure-results" }),
			{},
    );
  }
}
```
2. Add `test` script to the root `package.json` file:
```diff
{
  "name": "allure-js-cucumber-demo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
+  "scripts": {
+    "test": "cucumber-js -f ./reporter.js"
+  },
  "devDependencies": {
    "@cucumber/cucumber": "^8.3.1",
    "allure-cucumberjs": "^2.0.0-beta.18",
    "allure-js-commons": "^2.0.0-beta.18",
    "chai": "^4.3.6"
  }
}

```
3. Write some features and steps-defs
4. Then run the `test` script

## Run the demo

1. Clone the repository
2. Install dependencies:
```shell
npm i  # for npm users
yarn   # for yarn users
```
3. Run the tests script:
```shell
npm t      # for npm users
yarn test  # for yarn users
```
4. Check the result in `allure-results` directory
5. Upload your results right to the `Launches`
