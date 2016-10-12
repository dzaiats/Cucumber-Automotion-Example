Feature: Example of running Local Web driver with Cucumber and Automotion

  Scenario: Setup and start driver
    Given configuration for 'local' driver with browser 'firefox'

  Scenario: Verify base layout
    When home page is opened
    Then base elements are visible
    And page language is 'en'

  Scenario: Close driver
    Given driver is going to be closed