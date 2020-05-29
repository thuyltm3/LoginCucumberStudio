$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/cucumberstudio/loginCucumberStudio.feature");
formatter.feature({
  "name": "Login into page Cucumber Studio",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login success with valid email \u0026 valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The login screen is displayed on browser",
  "keyword": "Given "
});
formatter.step({
  "name": "The user login with valid \u003cemail\u003e and valid \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "The homepage will be showed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "thuy74809@gmail.com",
        "thuyltm12345"
      ]
    },
    {
      "cells": [
        "luuhuyhung19970107@gmail.com",
        "thuyltm3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login success with valid email \u0026 valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The login screen is displayed on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberstudio.StepDefinitions.StepDefinitions_LoginCucumberStudio.the_login_screen_is_displayed_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login with valid thuy74809@gmail.com and valid thuyltm12345",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberstudio.StepDefinitions.StepDefinitions_LoginCucumberStudio.the_user_login_with_valid_and_valid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The homepage will be showed",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberstudio.StepDefinitions.StepDefinitions_LoginCucumberStudio.the_homepage_will_be_showed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login success with valid email \u0026 valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The login screen is displayed on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberstudio.StepDefinitions.StepDefinitions_LoginCucumberStudio.the_login_screen_is_displayed_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login with valid luuhuyhung19970107@gmail.com and valid thuyltm3",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberstudio.StepDefinitions.StepDefinitions_LoginCucumberStudio.the_user_login_with_valid_and_valid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The homepage will be showed",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberstudio.StepDefinitions.StepDefinitions_LoginCucumberStudio.the_homepage_will_be_showed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login success with invalid email \u0026 valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The login screen is displayed on browser",
  "keyword": "Given "
});
formatter.step({
  "name": "The user login with invalid \u003cemail\u003e and valid \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "The error \u003cmessage\u003e is showed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "message"
      ]
    },
    {
      "cells": [
        "thuy@gmail.com",
        "thuyltm3",
        "Invalid email or password."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login success with invalid email \u0026 valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The login screen is displayed on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberstudio.StepDefinitions.StepDefinitions_LoginCucumberStudio.the_login_screen_is_displayed_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login with invalid thuy@gmail.com and valid thuyltm3",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberstudio.StepDefinitions.StepDefinitions_LoginCucumberStudio.the_user_login_with_invalid_and_valid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The error Invalid email or password. is showed",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberstudio.StepDefinitions.StepDefinitions_LoginCucumberStudio.the_error_is_showed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});