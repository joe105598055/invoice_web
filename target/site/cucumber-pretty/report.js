$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/issuing_company_invoice.feature");
formatter.feature({
  "line": 1,
  "name": "Issuing invoices for companies",
  "description": "In order to avoid errors\nAs a Teddysoft employee\nI want to brainlessly issue an company invoice with tax included price",
  "id": "issuing-invoices-for-companies",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is \u003ctax_included\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is \u003cVAT\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is \u003ctax_excluded\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;",
  "rows": [
    {
      "comments": [
        {
          "line": 14,
          "value": "# VAT \u003d Value Added Tax"
        }
      ],
      "cells": [
        "tax_included",
        "VAT",
        "tax_excluded",
        "notes"
      ],
      "line": 15,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;1"
    },
    {
      "cells": [
        "36000",
        "1714",
        "34286",
        "Refactoring定價"
      ],
      "line": 16,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;2"
    },
    {
      "cells": [
        "17900",
        "852",
        "17048",
        "Scrum早鳥"
      ],
      "line": 17,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;3"
    },
    {
      "cells": [
        "17000",
        "810",
        "16190",
        "Scrum泰迪之友"
      ],
      "line": 18,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;4"
    },
    {
      "cells": [
        "21000",
        "1000",
        "20000",
        "Scrum定價"
      ],
      "line": 19,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;5"
    },
    {
      "cells": [
        "99",
        "5",
        "94",
        "四捨五入案例"
      ],
      "line": 20,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;6"
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "邊界條件"
      ],
      "line": 21,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;7"
    },
    {
      "cells": [
        "10",
        "0",
        "10",
        "邊界條件"
      ],
      "line": 22,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;8"
    },
    {
      "cells": [
        "11",
        "1",
        "10",
        "邊界條件"
      ],
      "line": 23,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;9"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "可以開零元發票"
      ],
      "line": 24,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47279914,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 36000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1714",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 34286",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 123644043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 2827662738,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 124260260,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"vat\"}\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 28 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027JOE-PC\u0027, ip: \u0027140.124.181.85\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b), userDataDir\u003dC:\\Users\\joe\\AppData\\Local\\Temp\\scoped_dir5020_26491}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.133, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: e52135bcb20a3f1cb7e76937556188f4\n*** Element info: {Using\u003dname, value\u003dvat}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:452)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat tw.teddysoft.bdd.domain.invoice.support.WebInvoiceBuilder.issue(WebInvoiceBuilder.java:49)\r\n\tat step.IssuingInvoiceStep.lambda$new$4(IssuingInvoiceStep.java:37)\r\n\tat ✽.When I issue a company invoice(src/test/features/issuing_company_invoice.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1714",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "34286",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 88933,
  "status": "passed"
});
formatter.before({
  "duration": 283322,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 17900",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 852",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 17048",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 70605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17900",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 2364478518,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 118012155,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"vat\"}\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 23 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027JOE-PC\u0027, ip: \u0027140.124.181.85\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b), userDataDir\u003dC:\\Users\\joe\\AppData\\Local\\Temp\\scoped_dir3308_20343}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.133, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d7d0d6ef94e4483c5d4fe2d3ab5d2e11\n*** Element info: {Using\u003dname, value\u003dvat}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:452)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat tw.teddysoft.bdd.domain.invoice.support.WebInvoiceBuilder.issue(WebInvoiceBuilder.java:49)\r\n\tat step.IssuingInvoiceStep.lambda$new$4(IssuingInvoiceStep.java:37)\r\n\tat ✽.When I issue a company invoice(src/test/features/issuing_company_invoice.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "852",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "17048",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22834,
  "status": "passed"
});
formatter.before({
  "duration": 249672,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 17000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 810",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 16190",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 70605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 2421928278,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 112111367,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"vat\"}\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 24 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027JOE-PC\u0027, ip: \u0027140.124.181.85\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b), userDataDir\u003dC:\\Users\\joe\\AppData\\Local\\Temp\\scoped_dir836_16709}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.133, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 18a6481b0348aa2f96e3211536f13de2\n*** Element info: {Using\u003dname, value\u003dvat}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:452)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat tw.teddysoft.bdd.domain.invoice.support.WebInvoiceBuilder.issue(WebInvoiceBuilder.java:49)\r\n\tat step.IssuingInvoiceStep.lambda$new$4(IssuingInvoiceStep.java:37)\r\n\tat ✽.When I issue a company invoice(src/test/features/issuing_company_invoice.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "810",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "16190",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25238,
  "status": "passed"
});
formatter.before({
  "duration": 624630,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 21000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 20000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 60090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 2404205483,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 144157994,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"vat\"}\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 29 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027JOE-PC\u0027, ip: \u0027140.124.181.85\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b), userDataDir\u003dC:\\Users\\joe\\AppData\\Local\\Temp\\scoped_dir320_26720}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.133, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 420f927d75183a76e997acfad23b5de3\n*** Element info: {Using\u003dname, value\u003dvat}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:452)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat tw.teddysoft.bdd.domain.invoice.support.WebInvoiceBuilder.issue(WebInvoiceBuilder.java:49)\r\n\tat step.IssuingInvoiceStep.lambda$new$4(IssuingInvoiceStep.java:37)\r\n\tat ✽.When I issue a company invoice(src/test/features/issuing_company_invoice.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19228,
  "status": "passed"
});
formatter.before({
  "duration": 261690,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 99",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 5",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 94",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 53179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
