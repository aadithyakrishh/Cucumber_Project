$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("eLearning.feature");
formatter.feature({
  "line": 1,
  "name": "search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Register and send mail from eLearning Site. Confirm the acknowledgement",
  "description": "",
  "id": "search-functionality;register-and-send-mail-from-elearning-site.-confirm-the-acknowledgement",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User has launched the eLearning Site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on the sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User confirm follow courses checkbox is selected",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the FirstName as \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters the LastName as \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters the email as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters the username as \"\u003cuserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters the confirm password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Registration is successful",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the Profile drop down at top right corner",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User verifies the email address given as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the inbox link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User is redirected to Messages page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the compose message button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is directed to the compose email page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters the recepient email address as \"\u003crecieverEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter the subject text as \"\u003cmailSubject\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks on the Send Message button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User confimrs the acknowledgement",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "search-functionality;register-and-send-mail-from-elearning-site.-confirm-the-acknowledgement;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "userName",
        "password",
        "recieverEmail",
        "mailSubject",
        "messageBody"
      ],
      "line": 28,
      "id": "search-functionality;register-and-send-mail-from-elearning-site.-confirm-the-acknowledgement;;1"
    },
    {
      "cells": [
        "Ashu",
        "Sabnekar",
        "ashu@SDET.com",
        "Ashu6",
        "ashu1982",
        "ash",
        "Demo Mail",
        "Hello World"
      ],
      "line": 29,
      "id": "search-functionality;register-and-send-mail-from-elearning-site.-confirm-the-acknowledgement;;2"
    },
    {
      "cells": [
        "Ashwin",
        "Chandar",
        "ashChan@SDET.com",
        "Ashwin5",
        "ashwin1982",
        "ash",
        "Demo Mail",
        "Hello World"
      ],
      "line": 30,
      "id": "search-functionality;register-and-send-mail-from-elearning-site.-confirm-the-acknowledgement;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3445878800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Register and send mail from eLearning Site. Confirm the acknowledgement",
  "description": "",
  "id": "search-functionality;register-and-send-mail-from-elearning-site.-confirm-the-acknowledgement;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User has launched the eLearning Site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on the sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User confirm follow courses checkbox is selected",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the FirstName as \"Ashu\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters the LastName as \"Sabnekar\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters the email as \"ashu@SDET.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters the username as \"Ashu6\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters the password as \"ashu1982\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters the confirm password as \"ashu1982\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Registration is successful",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the Profile drop down at top right corner",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User verifies the email address given as \"ashu@SDET.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the inbox link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User is redirected to Messages page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the compose message button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is directed to the compose email page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters the recepient email address as \"ash\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter the subject text as \"Demo Mail\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks on the Send Message button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User confimrs the acknowledgement",
  "keyword": "Then "
});
formatter.match({
  "location": "eLearningStepDefinition.user_is_in_the_has_launched_the_eLearning_Site()"
});
formatter.result({
  "duration": 4613079200,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_the_sign_up_button()"
});
formatter.result({
  "duration": 4680246800,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_confirm_follow_courses_checkbox_is_selected()"
});
formatter.result({
  "duration": 3129604400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ashu",
      "offset": 30
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_FirstName_as(String)"
});
formatter.result({
  "duration": 143681400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sabnekar",
      "offset": 29
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_LastName_as(String)"
});
formatter.result({
  "duration": 121097100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashu@SDET.com",
      "offset": 26
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_email_as(String)"
});
formatter.result({
  "duration": 140506500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ashu6",
      "offset": 29
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 158752700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashu1982",
      "offset": 29
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 144997900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashu1982",
      "offset": 37
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 116492500,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_register_button()"
});
formatter.result({
  "duration": 4905004700,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_Registration_is_successful()"
});
formatter.result({
  "duration": 42366900,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_the_Profile_drop_down_at_top_right_corner()"
});
formatter.result({
  "duration": 122875100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashu@SDET.com",
      "offset": 42
    }
  ],
  "location": "eLearningStepDefinition.user_verifies_the_email_address_given_as(String)"
});
formatter.result({
  "duration": 54895800,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_the_inbox_link()"
});
formatter.result({
  "duration": 2519526300,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_is_redirected_to_Messages_page()"
});
formatter.result({
  "duration": 99250400,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_the_Compose_message_button()"
});
formatter.result({
  "duration": 4638309300,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_is_directed_to_the_compose_email_page()"
});
formatter.result({
  "duration": 54345600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ash",
      "offset": 44
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_recepient_email_address_as(String)"
});
formatter.result({
  "duration": 2345947600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Demo Mail",
      "offset": 32
    }
  ],
  "location": "eLearningStepDefinition.user_enter_the_subject_text_as(String)"
});
formatter.result({
  "duration": 117654700,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_the_Send_Message_button()"
});
formatter.result({
  "duration": 2088370200,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_confimrs_the_acknowledgement()"
});
formatter.result({
  "duration": 73707100,
  "status": "passed"
});
formatter.after({
  "duration": 59000,
  "status": "passed"
});
formatter.before({
  "duration": 1651686400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Register and send mail from eLearning Site. Confirm the acknowledgement",
  "description": "",
  "id": "search-functionality;register-and-send-mail-from-elearning-site.-confirm-the-acknowledgement;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User has launched the eLearning Site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on the sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User confirm follow courses checkbox is selected",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the FirstName as \"Ashwin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters the LastName as \"Chandar\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters the email as \"ashChan@SDET.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters the username as \"Ashwin5\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters the password as \"ashwin1982\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters the confirm password as \"ashwin1982\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Registration is successful",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the Profile drop down at top right corner",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User verifies the email address given as \"ashChan@SDET.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the inbox link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User is redirected to Messages page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the compose message button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is directed to the compose email page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters the recepient email address as \"ash\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter the subject text as \"Demo Mail\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks on the Send Message button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User confimrs the acknowledgement",
  "keyword": "Then "
});
formatter.match({
  "location": "eLearningStepDefinition.user_is_in_the_has_launched_the_eLearning_Site()"
});
formatter.result({
  "duration": 3539224600,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_the_sign_up_button()"
});
formatter.result({
  "duration": 5296267800,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_confirm_follow_courses_checkbox_is_selected()"
});
formatter.result({
  "duration": 3121693900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ashwin",
      "offset": 30
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_FirstName_as(String)"
});
formatter.result({
  "duration": 128286400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chandar",
      "offset": 29
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_LastName_as(String)"
});
formatter.result({
  "duration": 124808400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashChan@SDET.com",
      "offset": 26
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_email_as(String)"
});
formatter.result({
  "duration": 171066000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ashwin5",
      "offset": 29
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 115729400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashwin1982",
      "offset": 29
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 164470700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashwin1982",
      "offset": 37
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 131604000,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_register_button()"
});
formatter.result({
  "duration": 5656382400,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_Registration_is_successful()"
});
formatter.result({
  "duration": 41827400,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_the_Profile_drop_down_at_top_right_corner()"
});
formatter.result({
  "duration": 103975100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashChan@SDET.com",
      "offset": 42
    }
  ],
  "location": "eLearningStepDefinition.user_verifies_the_email_address_given_as(String)"
});
formatter.result({
  "duration": 53444100,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_the_inbox_link()"
});
formatter.result({
  "duration": 2540740800,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_is_redirected_to_Messages_page()"
});
formatter.result({
  "duration": 62807100,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_the_Compose_message_button()"
});
formatter.result({
  "duration": 2101571000,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_is_directed_to_the_compose_email_page()"
});
formatter.result({
  "duration": 100573600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ash",
      "offset": 44
    }
  ],
  "location": "eLearningStepDefinition.user_enters_the_recepient_email_address_as(String)"
});
formatter.result({
  "duration": 2335735600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Demo Mail",
      "offset": 32
    }
  ],
  "location": "eLearningStepDefinition.user_enter_the_subject_text_as(String)"
});
formatter.result({
  "duration": 162167800,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_clicks_on_the_Send_Message_button()"
});
formatter.result({
  "duration": 8970908300,
  "status": "passed"
});
formatter.match({
  "location": "eLearningStepDefinition.user_confimrs_the_acknowledgement()"
});
formatter.result({
  "duration": 73987700,
  "status": "passed"
});
formatter.after({
  "duration": 38000,
  "status": "passed"
});
formatter.uri("searchGoogle.feature");
formatter.feature({
  "line": 1,
  "name": "search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "search functionality of google.com",
  "description": "",
  "id": "search-functionality;search-functionality-of-google.com",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on the goolge home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user write \"\u003cInputText\u003e\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "results should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-functionality;search-functionality-of-google.com;",
  "rows": [
    {
      "cells": [
        "InputText"
      ],
      "line": 11,
      "id": "search-functionality;search-functionality-of-google.com;;1"
    },
    {
      "cells": [
        "COVID"
      ],
      "line": 12,
      "id": "search-functionality;search-functionality-of-google.com;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1614934400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "search functionality of google.com",
  "description": "",
  "id": "search-functionality;search-functionality-of-google.com;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on the goolge home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user write \"COVID\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "results should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_is_on_the_goolge_home_page()"
});
formatter.result({
  "duration": 1469531900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COVID",
      "offset": 12
    }
  ],
  "location": "stepdefinition.user_write_in_the_search_box(String)"
});
formatter.result({
  "duration": 6306400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.click_on_search_button()"
});
formatter.result({
  "duration": 120100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.results_should_be_displayed()"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.after({
  "duration": 37300,
  "status": "passed"
});
});