@foo
Feature: example startpage BDD testing
	Scenario: do the search on main page
		Given open "https://startpage.com"
		When type "hello world" to the query input
		And press submit button
		Then redirect to results page has happened
		And search results have been displayed
	
	Scenario: do the search on main page
		Given open "https://startpage.com"
		When type "world hello" to the query input
		And press submit button
		Then redirect to results page has happened
		And search results have been displayed
