$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/entering_vatid_and_company_name.feature");
formatter.feature({
  "line": 1,
  "name": "Entering VAT ID and the company name",
  "description": "In order to avoid errors\nAs a Teddysoft employee\nI want to make sure the VAT ID and company name are consistency",
  "id": "entering-vat-id-and-the-company-name",
  "keyword": "Feature"
});
formatter.before({
  "duration": 136702,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Entering VAT ID gets the corresponding company name",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;entering-vat-id-gets-the-corresponding-company-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I enter the VAT ID \"53909614\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the company name \"泰迪軟體科技有限公司\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "53909614",
      "offset": 20
    }
  ],
  "location": "SearchCompanyStep.java:25"
});
formatter.result({
  "duration": 2580513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "泰迪軟體科技有限公司",
      "offset": 31
    }
  ],
  "location": "SearchCompanyStep.java:31"
});
formatter.result({
  "duration": 85274101,
  "status": "passed"
});
formatter.after({
  "duration": 76313,
  "status": "passed"
});
formatter.before({
  "duration": 426931,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Entering company name gets the corresponding VAT ID",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;entering-company-name-gets-the-corresponding-vat-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I enter the company name \"泰迪軟體科技有限公司\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the VAT ID \"53909614\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "泰迪軟體科技有限公司",
      "offset": 26
    }
  ],
  "location": "SearchCompanyStep.java:47"
});
formatter.result({
  "duration": 215118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "53909614",
      "offset": 25
    }
  ],
  "location": "SearchCompanyStep.java:52"
});
formatter.result({
  "duration": 99722149,
  "status": "passed"
});
formatter.after({
  "duration": 29744,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Successful entering VAT ID gets corresponding company name",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the company name \u003ccompanyName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the VAT ID \u003cvatID\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;",
  "rows": [
    {
      "cells": [
        "companyName",
        "vatID"
      ],
      "line": 18,
      "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;1"
    },
    {
      "cells": [
        "\"蒂森電梯股份有限公司\"",
        "\"14070857\""
      ],
      "line": 19,
      "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;2"
    },
    {
      "cells": [
        "\"鼓勵閣商業顧問有限公司\"",
        "\"24940741\""
      ],
      "line": 20,
      "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;3"
    },
    {
      "cells": [
        "\"百碩工業股份有限公司\"",
        "\"97352022\""
      ],
      "line": 21,
      "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;4"
    },
    {
      "cells": [
        "\"大鵰生技股份有限公司\"",
        "\"86831314\""
      ],
      "line": 22,
      "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;5"
    },
    {
      "cells": [
        "\"王小明公司\"",
        "\"查無此統一編號\""
      ],
      "line": 23,
      "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 339802,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successful entering VAT ID gets corresponding company name",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the company name \"蒂森電梯股份有限公司\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the VAT ID \"14070857\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "蒂森電梯股份有限公司",
      "offset": 26
    }
  ],
  "location": "SearchCompanyStep.java:47"
});
formatter.result({
  "duration": 100048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14070857",
      "offset": 25
    }
  ],
  "location": "SearchCompanyStep.java:52"
});
formatter.result({
  "duration": 112297831,
  "status": "passed"
});
formatter.after({
  "duration": 26439,
  "status": "passed"
});
formatter.before({
  "duration": 133097,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Successful entering VAT ID gets corresponding company name",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the company name \"鼓勵閣商業顧問有限公司\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the VAT ID \"24940741\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "鼓勵閣商業顧問有限公司",
      "offset": 26
    }
  ],
  "location": "SearchCompanyStep.java:47"
});
formatter.result({
  "duration": 33349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24940741",
      "offset": 25
    }
  ],
  "location": "SearchCompanyStep.java:52"
});
formatter.result({
  "duration": 93497552,
  "status": "passed"
});
formatter.after({
  "duration": 12318,
  "status": "passed"
});
formatter.before({
  "duration": 150523,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successful entering VAT ID gets corresponding company name",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the company name \"百碩工業股份有限公司\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the VAT ID \"97352022\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "百碩工業股份有限公司",
      "offset": 26
    }
  ],
  "location": "SearchCompanyStep.java:47"
});
formatter.result({
  "duration": 44165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "97352022",
      "offset": 25
    }
  ],
  "location": "SearchCompanyStep.java:52"
});
formatter.result({
  "duration": 97234173,
  "status": "passed"
});
formatter.after({
  "duration": 21632,
  "status": "passed"
});
formatter.before({
  "duration": 240655,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successful entering VAT ID gets corresponding company name",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the company name \"大鵰生技股份有限公司\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the VAT ID \"86831314\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "大鵰生技股份有限公司",
      "offset": 26
    }
  ],
  "location": "SearchCompanyStep.java:47"
});
formatter.result({
  "duration": 67600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "86831314",
      "offset": 25
    }
  ],
  "location": "SearchCompanyStep.java:52"
});
formatter.result({
  "duration": 95897799,
  "status": "passed"
});
formatter.after({
  "duration": 130693,
  "status": "passed"
});
formatter.before({
  "duration": 464486,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Successful entering VAT ID gets corresponding company name",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-vat-id-gets-corresponding-company-name;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the company name \"王小明公司\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the VAT ID \"查無此統一編號\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "王小明公司",
      "offset": 26
    }
  ],
  "location": "SearchCompanyStep.java:47"
});
formatter.result({
  "duration": 130093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "查無此統一編號",
      "offset": 25
    }
  ],
  "location": "SearchCompanyStep.java:52"
});
formatter.result({
  "duration": 102357643,
  "status": "passed"
});
formatter.after({
  "duration": 32147,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Successful entering company name gets corresponding VAT ID",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I enter the VAT ID \u003cvatID\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see the company name \u003ccompanyName\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;",
  "rows": [
    {
      "cells": [
        "companyName",
        "vatID"
      ],
      "line": 30,
      "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;1"
    },
    {
      "cells": [
        "\"百碩工業股份有限公司\"",
        "\"97352022\""
      ],
      "line": 31,
      "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;2"
    },
    {
      "cells": [
        "\"蒂森電梯股份有限公司\"",
        "\"14070857\""
      ],
      "line": 32,
      "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;3"
    },
    {
      "cells": [
        "\"鼓勵閣商業顧問有限公司\"",
        "\"24940741\""
      ],
      "line": 33,
      "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;4"
    },
    {
      "cells": [
        "\"查無此公司\"",
        "\"51909614\""
      ],
      "line": 34,
      "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;5"
    },
    {
      "cells": [
        "\"統一編號格式錯誤\"",
        "\"12345\""
      ],
      "line": 35,
      "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 352420,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Successful entering company name gets corresponding VAT ID",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I enter the VAT ID \"97352022\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see the company name \"百碩工業股份有限公司\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "97352022",
      "offset": 20
    }
  ],
  "location": "SearchCompanyStep.java:25"
});
formatter.result({
  "duration": 133998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "百碩工業股份有限公司",
      "offset": 31
    }
  ],
  "location": "SearchCompanyStep.java:31"
});
formatter.result({
  "duration": 80530692,
  "status": "passed"
});
formatter.after({
  "duration": 20430,
  "status": "passed"
});
formatter.before({
  "duration": 203400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Successful entering company name gets corresponding VAT ID",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I enter the VAT ID \"14070857\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see the company name \"蒂森電梯股份有限公司\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "14070857",
      "offset": 20
    }
  ],
  "location": "SearchCompanyStep.java:25"
});
formatter.result({
  "duration": 74210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "蒂森電梯股份有限公司",
      "offset": 31
    }
  ],
  "location": "SearchCompanyStep.java:31"
});
formatter.result({
  "duration": 81383652,
  "status": "passed"
});
formatter.after({
  "duration": 24336,
  "status": "passed"
});
formatter.before({
  "duration": 354223,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Successful entering company name gets corresponding VAT ID",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I enter the VAT ID \"24940741\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see the company name \"鼓勵閣商業顧問有限公司\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "24940741",
      "offset": 20
    }
  ],
  "location": "SearchCompanyStep.java:25"
});
formatter.result({
  "duration": 85927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "鼓勵閣商業顧問有限公司",
      "offset": 31
    }
  ],
  "location": "SearchCompanyStep.java:31"
});
formatter.result({
  "duration": 82429798,
  "status": "passed"
});
formatter.after({
  "duration": 30946,
  "status": "passed"
});
formatter.before({
  "duration": 368344,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Successful entering company name gets corresponding VAT ID",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I enter the VAT ID \"51909614\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see the company name \"查無此公司\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "51909614",
      "offset": 20
    }
  ],
  "location": "SearchCompanyStep.java:25"
});
formatter.result({
  "duration": 107258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "查無此公司",
      "offset": 31
    }
  ],
  "location": "SearchCompanyStep.java:31"
});
formatter.result({
  "duration": 74987802,
  "status": "passed"
});
formatter.after({
  "duration": 11718,
  "status": "passed"
});
formatter.before({
  "duration": 144814,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Successful entering company name gets corresponding VAT ID",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;successful-entering-company-name-gets-corresponding-vat-id;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I enter the VAT ID \"12345\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see the company name \"統一編號格式錯誤\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 20
    }
  ],
  "location": "SearchCompanyStep.java:25"
});
formatter.result({
  "duration": 45667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "統一編號格式錯誤",
      "offset": 31
    }
  ],
  "location": "SearchCompanyStep.java:31"
});
formatter.result({
  "duration": 45066,
  "status": "passed"
});
formatter.after({
  "duration": 8412,
  "status": "passed"
});
});