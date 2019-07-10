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
  "duration": 1039062,
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
  "duration": 179492476,
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
  "duration": 12807689514,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_close_the_browser()"
});
formatter.result({
  "duration": 1004265459,
  "status": "passed"
});
formatter.after({
  "duration": 81185,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Verify all the links on WebPublishing landing page is funcitonal",
  "description": "",
  "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I am logged into wp.nyu.edu in \"\u003cBrowserType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on \"Create\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should see \"Admin_Email_Field\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on \"Support\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see \"WebPublishing_Help_Label\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on \"Updates\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I should see \"Recent_Posts\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;",
  "rows": [
    {
      "cells": [
        "Runmode",
        "BrowserType"
      ],
      "line": 34,
      "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;;1"
    },
    {
      "cells": [
        "N",
        "MozillaHL"
      ],
      "line": 35,
      "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3879360,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify all the links on WebPublishing landing page is funcitonal",
  "description": "",
  "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Runmode is \"N\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I am logged into wp.nyu.edu in \"MozillaHL\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on \"Create\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should see \"Admin_Email_Field\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on \"Support\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see \"WebPublishing_Help_Label\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on \"Updates\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I should see \"Recent_Posts\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 12
    }
  ],
  "location": "stepDefinition.Runmode_is(String)"
});
formatter.result({
  "duration": 2966003,
  "error_message": "cucumber.api.PendingException: Skipping the test as Runmode is NO\n\tat stepDefinitions.stepDefinition.Runmode_is(stepDefinition.java:261)\n\tat ✽.Given Runmode is \"N\"(Account.feature:23)\n",
  "status": "pending"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create",
      "offset": 12
    }
  ],
  "location": "stepDefinition.i_click_on_Link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin_Email_Field",
      "offset": 14
    }
  ],
  "location": "stepDefinition.i_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Support",
      "offset": 12
    }
  ],
  "location": "stepDefinition.i_click_on_Link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WebPublishing_Help_Label",
      "offset": 14
    }
  ],
  "location": "stepDefinition.i_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Updates",
      "offset": 12
    }
  ],
  "location": "stepDefinition.i_click_on_Link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Recent_Posts",
      "offset": 14
    }
  ],
  "location": "stepDefinition.i_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19020,
  "status": "passed"
});
});