$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Dashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying options in Dashboard",
  "description": "",
  "id": "verifying-options-in-dashboard",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify Options Under AboutTab",
  "description": "",
  "id": "verifying-options-in-dashboard;verify-options-under-abouttab",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I go to UNO on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \"ABOUT\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I verifyOptionsUnderTab \"ABOUT_UNO\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I verifyOptionsUnderTab \"UNO_AT_GLANCE\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I verifyOptionsUnderTab \"MISSION_VISION\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verifyOptionsUnderTab \"Administrative_OFFICE\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verifyOptionsUnderTab \"OFFICE_PRESIDENT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I verifyOptionsUnderTab \"ALUMNI\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verifyOptionsUnderTab \"UNO_HISTORY\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 16
    }
  ],
  "location": "AllStepMethods.gotoUno(String)"
});
formatter.result({
  "duration": 7586681779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABOUT",
      "offset": 12
    }
  ],
  "location": "AllStepMethods.click(String)"
});
formatter.result({
  "duration": 835042242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABOUT_UNO",
      "offset": 25
    }
  ],
  "location": "AllStepMethods.i_verifyOptionsUnderTab(String)"
});
formatter.result({
  "duration": 1686347449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNO_AT_GLANCE",
      "offset": 25
    }
  ],
  "location": "AllStepMethods.i_verifyOptionsUnderTab(String)"
});
formatter.result({
  "duration": 283038740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MISSION_VISION",
      "offset": 25
    }
  ],
  "location": "AllStepMethods.i_verifyOptionsUnderTab(String)"
});
formatter.result({
  "duration": 294734514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrative_OFFICE",
      "offset": 25
    }
  ],
  "location": "AllStepMethods.i_verifyOptionsUnderTab(String)"
});
formatter.result({
  "duration": 340776043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OFFICE_PRESIDENT",
      "offset": 25
    }
  ],
  "location": "AllStepMethods.i_verifyOptionsUnderTab(String)"
});
formatter.result({
  "duration": 309383100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ALUMNI",
      "offset": 25
    }
  ],
  "location": "AllStepMethods.i_verifyOptionsUnderTab(String)"
});
formatter.result({
  "duration": 311506231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNO_HISTORY",
      "offset": 25
    }
  ],
  "location": "AllStepMethods.i_verifyOptionsUnderTab(String)"
});
formatter.result({
  "duration": 318260554,
  "status": "passed"
});
formatter.after({
  "duration": 486701211,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify Regarding Prospective Student Tab Navigation Options Under AboutTab",
  "description": "",
  "id": "verifying-options-in-dashboard;verify-regarding-prospective-student-tab-navigation-options-under-abouttab",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I go to UNO on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on \"PROSPECTIVE_STUDENTS\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verifyThePageUrlIs \"http://uno.edu/prospectivestudents/index.aspx\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 16
    }
  ],
  "location": "AllStepMethods.gotoUno(String)"
});
formatter.result({
  "duration": 5810552956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROSPECTIVE_STUDENTS",
      "offset": 12
    }
  ],
  "location": "AllStepMethods.click(String)"
});
formatter.result({
  "duration": 821743222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://uno.edu/prospectivestudents/index.aspx",
      "offset": 22
    }
  ],
  "location": "AllStepMethods.i_verifyThePageUrlIs(String)"
});
formatter.result({
  "duration": 1240744923,
  "error_message": "org.junit.ComparisonFailure: expected:\u003chttp://[www.]uno.edu/prospectives...\u003e but was:\u003chttp://[]uno.edu/prospectives...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefination.AllStepMethods.i_verifyThePageUrlIs(AllStepMethods.java:91)\r\n\tat ✽.Then I verifyThePageUrlIs \"http://uno.edu/prospectivestudents/index.aspx\"(Dashboard.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 536037814,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify Footer Links",
  "description": "",
  "id": "verifying-options-in-dashboard;verify-footer-links",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I go to UNO on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I verifyFooterLink \"NON_DISC_FTR_LNK\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verifyFooterLink \"EMERGENCY_FTR_LNK\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I verifyFooterLink \"CONTACT_FTR_LNK\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I verifyFooterLink \"SACSOC_FTR_LNK\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verifyFooterLink \"COPYRIGHT_FTR_LNK\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 16
    }
  ],
  "location": "AllStepMethods.gotoUno(String)"
});
formatter.result({
  "duration": 6123001565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NON_DISC_FTR_LNK",
      "offset": 20
    }
  ],
  "location": "AllStepMethods.i_verifyFooterLink(String)"
});
formatter.result({
  "duration": 505158727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EMERGENCY_FTR_LNK",
      "offset": 20
    }
  ],
  "location": "AllStepMethods.i_verifyFooterLink(String)"
});
formatter.result({
  "duration": 275461693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTACT_FTR_LNK",
      "offset": 20
    }
  ],
  "location": "AllStepMethods.i_verifyFooterLink(String)"
});
formatter.result({
  "duration": 291919903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SACSOC_FTR_LNK",
      "offset": 20
    }
  ],
  "location": "AllStepMethods.i_verifyFooterLink(String)"
});
formatter.result({
  "duration": 319918989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COPYRIGHT_FTR_LNK",
      "offset": 20
    }
  ],
  "location": "AllStepMethods.i_verifyFooterLink(String)"
});
formatter.result({
  "duration": 326982644,
  "status": "passed"
});
formatter.after({
  "duration": 399414446,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "verify Facebook From Dashboard",
  "description": "",
  "id": "verifying-options-in-dashboard;verify-facebook-from-dashboard",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I go to UNO on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on \"FACEBOOK\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verifyThePageUrlIs \"https://www.facebook.com/UniversityOfNewOrleans\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 16
    }
  ],
  "location": "AllStepMethods.gotoUno(String)"
});
formatter.result({
  "duration": 5870810374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FACEBOOK",
      "offset": 12
    }
  ],
  "location": "AllStepMethods.click(String)"
});
formatter.result({
  "duration": 801178806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/UniversityOfNewOrleans",
      "offset": 22
    }
  ],
  "location": "AllStepMethods.i_verifyThePageUrlIs(String)"
});
formatter.result({
  "duration": 4620505332,
  "status": "passed"
});
formatter.after({
  "duration": 558648838,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "verifying Giving Link",
  "description": "",
  "id": "verifying-options-in-dashboard;verifying-giving-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I go to UNO on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on \"GIVING\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "SwitchToChildWindow \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "hoveron \"Gift_BUSINESS_ADMIN\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 16
    }
  ],
  "location": "AllStepMethods.gotoUno(String)"
});
formatter.result({
  "duration": 6250387131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GIVING",
      "offset": 12
    }
  ],
  "location": "AllStepMethods.click(String)"
});
formatter.result({
  "duration": 878284465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "AllStepMethods.switchtochildwindow(String)"
});
formatter.result({
  "duration": 278265636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift_BUSINESS_ADMIN",
      "offset": 9
    }
  ],
  "location": "AllStepMethods.hoveron(String)"
});
formatter.result({
  "duration": 6713880911,
  "status": "passed"
});
formatter.after({
  "duration": 474781437,
  "status": "passed"
});
});