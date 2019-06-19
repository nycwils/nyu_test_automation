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
  "line": 13,
  "name": "I click on \"Your_Avatar_Link\" link and upload a picture",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the picture should be uploaded successfully",
  "keyword": "Then "
});
formatter.step({
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
    },
    {
      "cells": [
        "Y",
        "ChromeHL"
      ],
      "line": 20,
      "id": "account-feature;webpublishing-upload-avatar-image;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 741784,
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
  "line": 13,
  "name": "I click on \"Your_Avatar_Link\" link and upload a picture",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the picture should be uploaded successfully",
  "keyword": "Then "
});
formatter.step({
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
  "duration": 98663867,
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
  "duration": 8370847177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your_Avatar_Link",
      "offset": 12
    }
  ],
  "location": "stepDefinition.i_click_on_link_and_upload_a_picture(String)"
});
formatter.result({
  "duration": 30026083926,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: Your Avatar\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027wl41applemacprosn-f5kq10mnf9vn.cdv.nyu.edu\u0027, ip: \u0027fe80:0:0:0:10d9:938a:be81:dc66%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/var/folders/tl/r7p60zdd2yv85_555mclzzy1_g0yrr/T/rust_mozprofile.ZkGunNxdfTUV, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.23.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, moz:headless\u003dtrue, platform\u003dANY, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d57.0.4, platformVersion\u003d17.5.0, moz:processID\u003d12567.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003ddarwin, moz:webdriverClick\u003dfalse}]\nSession ID: 47048728-04f1-e943-8c07-515bd077d349\n*** Element info: {Using\u003dlink text, value\u003dYour Avatar}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:461)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat util.WebConnector.click_link_text(WebConnector.java:169)\n\tat stepDefinitions.stepDefinition.i_click_on_link_and_upload_a_picture(stepDefinition.java:58)\n\tat ✽.When I click on \"Your_Avatar_Link\" link and upload a picture(Account.feature:13)\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.the_picture_should_be_uploaded_successfully()"
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
  "duration": 515459138,
  "status": "passed"
});
formatter.before({
  "duration": 323515,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "WebPublishing Upload Avatar Image",
  "description": "",
  "id": "account-feature;webpublishing-upload-avatar-image;;3",
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
  "name": "I am logged into wp.nyu.edu in \"ChromeHL\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Your_Avatar_Link\" link and upload a picture",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the picture should be uploaded successfully",
  "keyword": "Then "
});
formatter.step({
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
  "duration": 64690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChromeHL",
      "offset": 32
    }
  ],
  "location": "stepDefinition.i_am_logged_into_wp_nyu_edu_in(String)"
});
formatter.result({
  "duration": 3203442454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your_Avatar_Link",
      "offset": 12
    }
  ],
  "location": "stepDefinition.i_click_on_link_and_upload_a_picture(String)"
});
formatter.result({
  "duration": 30056816297,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Your Avatar\"}\n  (Session info: headless chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027wl41applemacprosn-f5kq10mnf9vn.cdv.nyu.edu\u0027, ip: \u0027fe80:0:0:0:10d9:938a:be81:dc66%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56691}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052), userDataDir\u003d/var/folders/tl/r7p60zdd2yv85_555mclzzy1_g0yrr/T/.org.chromium.Chromium.SkKHMX}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d74.0.3729.169, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9ebd49f1eacd5fed313e60e1db5237c0\n*** Element info: {Using\u003dlink text, value\u003dYour Avatar}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:461)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat util.WebConnector.click_link_text(WebConnector.java:169)\n\tat stepDefinitions.stepDefinition.i_click_on_link_and_upload_a_picture(stepDefinition.java:58)\n\tat ✽.When I click on \"Your_Avatar_Link\" link and upload a picture(Account.feature:13)\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.the_picture_should_be_uploaded_successfully()"
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
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 600356456830,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Verify all the links on WebPublishing landing page is funcitonal",
  "description": "",
  "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I am logged into wp.nyu.edu in \"\u003cBrowserType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on \"Create\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see \"Admin_Email_Field\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on \"Support\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see \"WebPublishing_Help_Label\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on \"Updates\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should see \"Recent_Posts\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;",
  "rows": [
    {
      "cells": [
        "Runmode",
        "BrowserType"
      ],
      "line": 35,
      "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;;1"
    },
    {
      "cells": [
        "Y",
        "MozillaHL"
      ],
      "line": 36,
      "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;;2"
    },
    {
      "cells": [
        "Y",
        "ChromeHL"
      ],
      "line": 37,
      "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 326225,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify all the links on WebPublishing landing page is funcitonal",
  "description": "",
  "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I am logged into wp.nyu.edu in \"MozillaHL\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on \"Create\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see \"Admin_Email_Field\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on \"Support\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see \"WebPublishing_Help_Label\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on \"Updates\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should see \"Recent_Posts\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
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
  "duration": 59994,
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
  "duration": 328778,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027wl41applemacprosn-f5kq10mnf9vn.cdv.nyu.edu\u0027, ip: \u0027fe80:0:0:0:10d9:938a:be81:dc66%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:925)\n\tat util.WebConnector.openBrowser(WebConnector.java:136)\n\tat stepDefinitions.stepDefinition.i_am_logged_into_wp_nyu_edu_in(stepDefinition.java:37)\n\tat ✽.Given I am logged into wp.nyu.edu in \"MozillaHL\"(Account.feature:25)\n",
  "status": "failed"
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
  "duration": 349921,
  "status": "passed"
});
formatter.before({
  "duration": 304034,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify all the links on WebPublishing landing page is funcitonal",
  "description": "",
  "id": "account-feature;verify-all-the-links-on-webpublishing-landing-page-is-funcitonal;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I am logged into wp.nyu.edu in \"ChromeHL\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on \"Create\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see \"Admin_Email_Field\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on \"Support\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see \"WebPublishing_Help_Label\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on \"Updates\" Link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should see \"Recent_Posts\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
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
  "duration": 53394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChromeHL",
      "offset": 32
    }
  ],
  "location": "stepDefinition.i_am_logged_into_wp_nyu_edu_in(String)"
});
formatter.result({
  "duration": 295172,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027wl41applemacprosn-f5kq10mnf9vn.cdv.nyu.edu\u0027, ip: \u0027fe80:0:0:0:10d9:938a:be81:dc66%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.fullscreen(RemoteWebDriver.java:929)\n\tat util.WebConnector.openBrowser(WebConnector.java:138)\n\tat stepDefinitions.stepDefinition.i_am_logged_into_wp_nyu_edu_in(stepDefinition.java:37)\n\tat ✽.Given I am logged into wp.nyu.edu in \"ChromeHL\"(Account.feature:25)\n",
  "status": "failed"
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
  "duration": 359053,
  "status": "passed"
});
});