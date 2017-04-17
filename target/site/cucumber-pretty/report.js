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
  "duration": 315166,
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
  "duration": 1929150,
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
  "duration": 2442458977,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 759511154,
  "status": "passed"
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
  "duration": 69402,
  "status": "passed"
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
  "duration": 42663,
  "status": "passed"
});
formatter.after({
  "duration": 36654,
  "status": "passed"
});
formatter.before({
  "duration": 318171,
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
  "duration": 63093,
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
  "duration": 2433287926,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 770521222,
  "status": "passed"
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
  "duration": 71206,
  "status": "passed"
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
  "duration": 41761,
  "status": "passed"
});
formatter.after({
  "duration": 12919,
  "status": "passed"
});
formatter.before({
  "duration": 375555,
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
  "duration": 51676,
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
  "duration": 2440233589,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 772067908,
  "status": "passed"
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
  "duration": 64595,
  "status": "passed"
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
  "duration": 40260,
  "status": "passed"
});
formatter.after({
  "duration": 15923,
  "status": "passed"
});
formatter.before({
  "duration": 306152,
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
  "duration": 56784,
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
  "duration": 2418234783,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 759704339,
  "status": "passed"
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
  "duration": 75711,
  "status": "passed"
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
  "duration": 48071,
  "status": "passed"
});
formatter.after({
  "duration": 17126,
  "status": "passed"
});
formatter.before({
  "duration": 1178942,
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
  "duration": 164944,
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
formatter.result({
  "duration": 2427975777,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 780512185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 69102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "94",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 45367,
  "status": "passed"
});
formatter.after({
  "duration": 14421,
  "status": "passed"
});
formatter.before({
  "duration": 302547,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;7",
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
  "name": "the tax included price provided is 1",
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
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 1",
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
  "duration": 56183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 2395755869,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 759927869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 44766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 29144,
  "status": "passed"
});
formatter.after({
  "duration": 18928,
  "status": "passed"
});
formatter.before({
  "duration": 269799,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;8",
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
  "name": "the tax included price provided is 10",
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
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 10",
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
  "duration": 100048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 2421937455,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 765742361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 75111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 55582,
  "status": "passed"
});
formatter.after({
  "duration": 31546,
  "status": "passed"
});
formatter.before({
  "duration": 402896,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;9",
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
  "name": "the tax included price provided is 11",
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
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 10",
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
  "duration": 86528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 2406824524,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 779154178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 82922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 54681,
  "status": "passed"
});
formatter.after({
  "duration": 12319,
  "status": "passed"
});
formatter.before({
  "duration": 289027,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;10",
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
  "name": "the tax included price provided is 0",
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
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 0",
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
  "duration": 57686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 2391121221,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 769128665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 64896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 30044,
  "status": "passed"
});
formatter.after({
  "duration": 9314,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is \u003ctax_excluded\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is \u003cVAT\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is \u003ctax_included\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;",
  "rows": [
    {
      "comments": [
        {
          "line": 35,
          "value": "# VAT \u003d Value Added Tax"
        }
      ],
      "cells": [
        "tax_included",
        "VAT",
        "tax_excluded",
        "notes"
      ],
      "line": 36,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;1"
    },
    {
      "cells": [
        "36000",
        "1714",
        "34286",
        "Refactoring定價"
      ],
      "line": 37,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;2"
    },
    {
      "cells": [
        "17900",
        "852",
        "17048",
        "Scrum早鳥"
      ],
      "line": 38,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;3"
    },
    {
      "cells": [
        "17000",
        "810",
        "16190",
        "Scrum泰迪之友"
      ],
      "line": 39,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;4"
    },
    {
      "cells": [
        "21000",
        "1000",
        "20000",
        "Scrum定價"
      ],
      "line": 40,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;5"
    },
    {
      "cells": [
        "99",
        "5",
        "94",
        "四捨五入案例"
      ],
      "line": 41,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;6"
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "邊界條件"
      ],
      "line": 42,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;7"
    },
    {
      "comments": [
        {
          "line": 43,
          "value": "#  | 10              | 0     | 10           | 此案例不適用     |"
        }
      ],
      "cells": [
        "11",
        "1",
        "10",
        "邊界條件"
      ],
      "line": 44,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;8"
    },
    {
      "cells": [
        "12",
        "1",
        "11",
        "邊界條件"
      ],
      "line": 45,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;9"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "可以開零元發票"
      ],
      "line": 46,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 222629,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 34286",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1714",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 36000",
  "matchedColumns": [
    0
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
  "duration": 46268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34286",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 2462829978,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 754293043,
  "status": "passed"
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
  "duration": 76313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 79017,
  "status": "passed"
});
formatter.after({
  "duration": 13520,
  "status": "passed"
});
formatter.before({
  "duration": 346712,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 17048",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 852",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 17900",
  "matchedColumns": [
    0
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
  "duration": 91035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17048",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 2435539453,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 759938685,
  "status": "passed"
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
  "duration": 109662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17900",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 165244,
  "status": "passed"
});
formatter.after({
  "duration": 15623,
  "status": "passed"
});
formatter.before({
  "duration": 537494,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 16190",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 810",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 17000",
  "matchedColumns": [
    0
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
  "duration": 126487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16190",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 2428679116,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 761714008,
  "status": "passed"
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
  "duration": 69102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 45367,
  "status": "passed"
});
formatter.after({
  "duration": 13820,
  "status": "passed"
});
formatter.before({
  "duration": 798580,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 20000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 21000",
  "matchedColumns": [
    0
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
  "duration": 154729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 2394022007,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 763776556,
  "status": "passed"
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
  "duration": 129191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 48372,
  "status": "passed"
});
formatter.after({
  "duration": 12318,
  "status": "passed"
});
formatter.before({
  "duration": 339201,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 94",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 5",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 99",
  "matchedColumns": [
    0
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
  "duration": 60690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "94",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 2379163853,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 774666747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 84124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 55281,
  "status": "passed"
});
formatter.after({
  "duration": 12018,
  "status": "passed"
});
formatter.before({
  "duration": 312161,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 1",
  "matchedColumns": [
    0
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
  "duration": 68502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 2409597020,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 756855830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 60991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 47770,
  "status": "passed"
});
formatter.after({
  "duration": 11417,
  "status": "passed"
});
formatter.before({
  "duration": 304050,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 43,
      "value": "#  | 10              | 0     | 10           | 此案例不適用     |"
    }
  ],
  "line": 44,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 11",
  "matchedColumns": [
    0
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
  "duration": 73909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 2432112289,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 760504121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 53178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 49573,
  "status": "passed"
});
formatter.after({
  "duration": 12619,
  "status": "passed"
});
formatter.before({
  "duration": 252674,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 11",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 12",
  "matchedColumns": [
    0
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
  "duration": 46870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 2397559133,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 764048458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 101550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 57085,
  "status": "passed"
});
formatter.after({
  "duration": 15023,
  "status": "passed"
});
formatter.before({
  "duration": 404398,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 0",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 0",
  "matchedColumns": [
    0
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
  "duration": 83523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 2400242699,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 772642356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 48672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 26439,
  "status": "passed"
});
formatter.after({
  "duration": 27341,
  "status": "passed"
});
formatter.before({
  "duration": 213315,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "A special case to issue an invoice by assigning 10$ to tax included prices first and tax excluded prices second",
  "description": "",
  "id": "issuing-invoices-for-companies;a-special-case-to-issue-an-invoice-by-assigning-10$-to-tax-included-prices-first-and-tax-excluded-prices-second",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "I am on the invoice Web page",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "the tax included price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the tax excluded price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I should see the VAT is 1",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the tax included price is 11",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the tax excluded price is 10",
  "keyword": "And "
});
formatter.match({
  "location": "IssuingInvoiceStep.java:33"
});
formatter.result({
  "duration": 13821,
  "status": "passed"
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
  "duration": 40861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 2386695381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 53305364,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 755688306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 77815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 49273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 49573,
  "status": "passed"
});
formatter.after({
  "duration": 12919,
  "status": "passed"
});
formatter.before({
  "duration": 374955,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "A special case to issue an invoice by assigning 10$ to tax excluded prices first and tax included prices second",
  "description": "",
  "id": "issuing-invoices-for-companies;a-special-case-to-issue-an-invoice-by-assigning-10$-to-tax-excluded-prices-first-and-tax-included-prices-second",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "the tax excluded price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the tax included price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I should see the VAT is 0",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "the tax included price is 10",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the tax excluded price is 10",
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
  "duration": 163141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 2376956791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 51265049,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 760543480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 86528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 65497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 65797,
  "status": "passed"
});
formatter.after({
  "duration": 39058,
  "status": "passed"
});
});