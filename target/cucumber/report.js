$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 1,
  "name": "Account Feature",
  "description": "\nIn order to verify that all the components with image loadking and top p nav are working as expected\nAs a user with valid credentials\nI want to run through all the test cases for image loading and wp navigation.",
  "id": "account-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "WebPublishing Upload Avatar Image",
  "description": "",
  "id": "account-feature;webpublishing-upload-avatar-image",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am logged into wp.nyu.edu in \"\u003cBrowserType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#When I click on \"Your_Avatar_Link\" link and upload a picture"
    },
    {
      "line": 14,
      "value": "#Then the picture should be uploaded successfully"
    }
  ],
  "line": 15,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "account-feature;webpublishing-upload-avatar-image;",
  "rows": [
    {
      "cells": [
        "Runmode",
        "BrowserType"
      ],
      "line": 18,
      "id": "account-feature;webpublishing-upload-avatar-image;;1"
    },
    {
      "cells": [
        "Y",
        "MozillaHL"
      ],
      "line": 19,
      "id": "account-feature;webpublishing-upload-avatar-image;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2386377,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "WebPublishing Upload Avatar Image",
  "description": "",
  "id": "account-feature;webpublishing-upload-avatar-image;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am logged into wp.nyu.edu in \"MozillaHL\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#When I click on \"Your_Avatar_Link\" link and upload a picture"
    },
    {
      "line": 14,
      "value": "#Then the picture should be uploaded successfully"
    }
  ],
  "line": 15,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "stepDefinition.Runmode_is(String)"
});
formatter.result({
  "duration": 162945932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MozillaHL",
      "offset": 32
    }
  ],
  "location": "stepDefinition.i_am_logged_into_wp_nyu_edu_in(String)"
});
formatter.result({
  "duration": 12744294779,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_close_the_browser()"
});
formatter.result({
  "duration": 988260264,
  "status": "passed"
});
formatter.after({
  "duration": 77157,
  "status": "passed"
});
});