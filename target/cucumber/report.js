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
  "duration": 1018544,
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
  "duration": 187613647,
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
  "duration": 13472876585,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_close_the_browser()"
});
formatter.result({
  "duration": 1001133654,
  "status": "passed"
});
formatter.after({
  "duration": 72578,
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
        "Y",
        "MozillaHL"
      ],
      "line": 35,
      "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3996488,
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
  "name": "Runmode is \"Y\"",
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
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "stepDefinition.Runmode_is(String)"
});
formatter.result({
  "duration": 67081,
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
  "duration": 14528602067,
  "status": "passed"
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
  "duration": 7975778514,
  "status": "passed"
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
  "duration": 30133581042,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: /html/body/div[2]/main/article/div[3]/div/form/div/div/fieldset/div/input[1]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027ip-172-31-36-232\u0027, ip: \u0027172.31.36.232\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-1043-aws\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/tmp/rust_mozprofile.4ETjDUQkYFDn, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.24.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dtrue, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d67.0.4, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d4.15.0-1043-aws, moz:processID\u003d24336.0, browserName\u003dfirefox, moz:buildID\u003d20190620092152, javascriptEnabled\u003dtrue, platformName\u003dlinux, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: 455b829f-d810-479e-90f0-4a542d120f76\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[2]/main/article/div[3]/div/form/div/div/fieldset/div/input[1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat util.WebConnector.isElementPresentText(WebConnector.java:218)\n\tat stepDefinitions.stepDefinition.i_should_see(stepDefinition.java:98)\n\tat ✽.Then I should see \"Admin_Email_Field\"(Account.feature:26)\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1194603415,
  "status": "passed"
});
});