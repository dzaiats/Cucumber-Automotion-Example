Feature: Example of running Remote mobile Web driver with Cucumber and Automotion

  Scenario: Setup and start driver
    Given configuration for 'mobile: Apple iPhone 6' driver with browser 'chrome'

  Scenario: Verify base layout
    When home page is opened
    Then base elements are visible
    And page language is 'en'

  Scenario: Close driver
    Given driver is going to be closed