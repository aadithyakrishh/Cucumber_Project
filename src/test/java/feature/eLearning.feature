Feature: search functionality
//editing 
  Scenario Outline: Register and send mail from eLearning Site. Confirm the acknowledgement
    Given User has launched the eLearning Site 
    When User clicks on the sign up button
    Then User confirm follow courses checkbox is selected
    And User enters the FirstName as "<firstName>"
    And User enters the LastName as "<lastName>"
    And User enters the email as "<email>"
    And User enters the username as "<userName>"
    And User enters the password as "<password>"
    And User enters the confirm password as "<password>"
    Then User clicks on register button
    And User Registration is successful
    Then User clicks on the Profile drop down at top right corner
    And User verifies the email address given as "<email>"
    Then User clicks on the inbox link
    And User is redirected to Messages page
    Then User clicks on the compose message button
    And User is directed to the compose email page
    Then User enters the recepient email address as "<recieverEmail>"
    Then User enter the subject text as "<mailSubject>"
    And User clicks on the Send Message button
    Then User confimrs the acknowledgement
    

    Examples: 
      | firstName | lastName | email  | userName | password | recieverEmail | mailSubject | messageBody |
      | AK | KRISH | AK@SDET.com | AK5 | AK1993 | ak | Demo Mail | Hello World |
      | MS | DHONI | MS@SDET.com | MS5 | MS993 | ms | Demo Mail | Hello World |
      