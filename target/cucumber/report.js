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
  "duration": 2254827,
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
  "duration": 161867130,
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
  "duration": 101465028365,
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003dnetTimeout\u0026u\u003dhttps%3A//devhercules.home.nyu.edu/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dThe%20server%20at%20devhercules.home.nyu.edu%20is%20taking%20too%20long%20to%20respond.\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027ip-172-31-36-232\u0027, ip: \u0027172.31.36.232\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-1043-aws\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/tmp/rust_mozprofile.kXT5Q5FRMGO6, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.24.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dtrue, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d68.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d4.15.0-1043-aws, moz:processID\u003d8279.0, browserName\u003dfirefox, moz:buildID\u003d20190706110151, javascriptEnabled\u003dtrue, platformName\u003dlinux, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: 0c57f6cf-78c8-4d7a-8677-66f73edb4148\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:364)\n\tat util.WebConnector.navigate(WebConnector.java:154)\n\tat util.WebConnector.nyuWebPublishingDefaultLogin(WebConnector.java:376)\n\tat stepDefinitions.stepDefinition.i_am_logged_into_wp_nyu_edu_in(stepDefinition.java:38)\n\tat ✽.Given I am logged into wp.nyu.edu in \"MozillaHL\"(Account.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1319922354,
  "status": "passed"
});
});