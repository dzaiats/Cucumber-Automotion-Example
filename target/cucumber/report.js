$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("headless_driver_example.feature");
formatter.feature({
  "line": 1,
  "name": "Example of running Headless Ghost driver with Cucumber and Automotion",
  "description": "",
  "id": "example-of-running-headless-ghost-driver-with-cucumber-and-automotion",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Setup and start the Local driver",
  "description": "",
  "id": "example-of-running-headless-ghost-driver-with-cucumber-and-automotion;setup-and-start-the-local-driver",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "configuration for \u0027headless\u0027 driver with browser \u0027chrome\u0027",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "headless",
      "offset": 19
    },
    {
      "val": "chrome",
      "offset": 50
    }
  ],
  "location": "StepsImplementation.setup_driver(String,String)"
});
formatter.result({
  "duration": 1188411337,
  "status": "passed"
});
formatter.after({
  "duration": 95535,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify base layout",
  "description": "",
  "id": "example-of-running-headless-ghost-driver-with-cucumber-and-automotion;verify-base-layout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "home page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "base elements are visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "page language is \u0027en\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepsImplementation.homePageIsOpened()"
});
formatter.result({
  "duration": 4154886311,
  "status": "passed"
});
formatter.match({
  "location": "StepsImplementation.baseElementsAreVisible()"
});
formatter.result({
  "duration": 141781110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    }
  ],
  "location": "StepsImplementation.pageLanguageIs(String)"
});
formatter.result({
  "duration": 1025487241,
  "status": "passed"
});
formatter.after({
  "duration": 18453,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Close driver",
  "description": "",
  "id": "example-of-running-headless-ghost-driver-with-cucumber-and-automotion;close-driver",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "driver is going to be closed",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsImplementation.driverIsGoingToBeClosed()"
});
formatter.result({
  "duration": 70918193,
  "status": "passed"
});
formatter.after({
  "duration": 21943,
  "status": "passed"
});
formatter.uri("local_driver_example.feature");
formatter.feature({
  "line": 1,
  "name": "Example of running Local Web driver with Cucumber and Automotion",
  "description": "",
  "id": "example-of-running-local-web-driver-with-cucumber-and-automotion",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Setup and start the Local driver",
  "description": "",
  "id": "example-of-running-local-web-driver-with-cucumber-and-automotion;setup-and-start-the-local-driver",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "configuration for \u0027local\u0027 driver with browser \u0027firefox\u0027",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 19
    },
    {
      "val": "firefox",
      "offset": 47
    }
  ],
  "location": "StepsImplementation.setup_driver(String,String)"
});
formatter.result({
  "duration": 2104529197,
  "status": "passed"
});
formatter.after({
  "duration": 14108,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify base layout",
  "description": "",
  "id": "example-of-running-local-web-driver-with-cucumber-and-automotion;verify-base-layout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "home page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "base elements are visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "page language is \u0027en\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepsImplementation.homePageIsOpened()"
});
formatter.result({
  "duration": 1820456292,
  "status": "passed"
});
formatter.match({
  "location": "StepsImplementation.baseElementsAreVisible()"
});
formatter.result({
  "duration": 137682732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    }
  ],
  "location": "StepsImplementation.pageLanguageIs(String)"
});
formatter.result({
  "duration": 895580022,
  "status": "passed"
});
formatter.after({
  "duration": 16491,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Close driver",
  "description": "",
  "id": "example-of-running-local-web-driver-with-cucumber-and-automotion;close-driver",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "driver is going to be closed",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsImplementation.driverIsGoingToBeClosed()"
});
formatter.result({
  "duration": 142342627,
  "status": "passed"
});
formatter.after({
  "duration": 16018,
  "status": "passed"
});
formatter.uri("remote_driver_example.feature");
formatter.feature({
  "line": 1,
  "name": "Example of running Remote Web driver with Cucumber and Automotion",
  "description": "",
  "id": "example-of-running-remote-web-driver-with-cucumber-and-automotion",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Setup and start the Local driver",
  "description": "",
  "id": "example-of-running-remote-web-driver-with-cucumber-and-automotion;setup-and-start-the-local-driver",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "configuration for \u0027remote\u0027 driver with browser \u0027chrome\u0027",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "remote",
      "offset": 19
    },
    {
      "val": "chrome",
      "offset": 48
    }
  ],
  "location": "StepsImplementation.setup_driver(String,String)"
});
formatter.result({
  "duration": 586063037,
  "status": "passed"
});
formatter.after({
  "duration": 28823,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify base layout",
  "description": "",
  "id": "example-of-running-remote-web-driver-with-cucumber-and-automotion;verify-base-layout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "home page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "base elements are visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "page language is \u0027en\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepsImplementation.homePageIsOpened()"
});
formatter.result({
  "duration": 13034152863,
  "status": "passed"
});
formatter.match({
  "location": "StepsImplementation.baseElementsAreVisible()"
});
formatter.result({
  "duration": 145846026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    }
  ],
  "location": "StepsImplementation.pageLanguageIs(String)"
});
formatter.result({
  "duration": 782944219,
  "status": "passed"
});
formatter.after({
  "duration": 17324,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Close driver",
  "description": "",
  "id": "example-of-running-remote-web-driver-with-cucumber-and-automotion;close-driver",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "driver is going to be closed",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsImplementation.driverIsGoingToBeClosed()"
});
formatter.result({
  "duration": 53194155,
  "status": "passed"
});
formatter.after({
  "duration": 66025,
  "status": "passed"
});
formatter.uri("remote_mobile_driver_example.feature");
formatter.feature({
  "line": 1,
  "name": "Example of running Remote mobile Web driver with Cucumber and Automotion",
  "description": "",
  "id": "example-of-running-remote-mobile-web-driver-with-cucumber-and-automotion",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Setup and start the Local driver",
  "description": "",
  "id": "example-of-running-remote-mobile-web-driver-with-cucumber-and-automotion;setup-and-start-the-local-driver",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "configuration for \u0027mobile: Apple iPad Mini\u0027 driver with browser \u0027chrome\u0027",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile: Apple iPad Mini",
      "offset": 19
    },
    {
      "val": "chrome",
      "offset": 65
    }
  ],
  "location": "StepsImplementation.setup_driver(String,String)"
});
formatter.result({
  "duration": 602819627,
  "status": "passed"
});
formatter.after({
  "duration": 27047,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify base layout",
  "description": "",
  "id": "example-of-running-remote-mobile-web-driver-with-cucumber-and-automotion;verify-base-layout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "home page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "base elements are visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "page language is \u0027en\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepsImplementation.homePageIsOpened()"
});
formatter.result({
  "duration": 13591765213,
  "status": "passed"
});
formatter.match({
  "location": "StepsImplementation.baseElementsAreVisible()"
});
formatter.result({
  "duration": 115778460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    }
  ],
  "location": "StepsImplementation.pageLanguageIs(String)"
});
formatter.result({
  "duration": 655430741,
  "status": "passed"
});
formatter.after({
  "duration": 22681,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Close driver",
  "description": "",
  "id": "example-of-running-remote-mobile-web-driver-with-cucumber-and-automotion;close-driver",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "driver is going to be closed",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsImplementation.driverIsGoingToBeClosed()"
});
formatter.result({
  "duration": 53845835,
  "status": "passed"
});
formatter.after({
  "duration": 60940,
  "status": "passed"
});
});