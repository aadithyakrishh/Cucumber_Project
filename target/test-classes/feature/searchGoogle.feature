Feature: search functionality

  @tag1
  Scenario Outline: search functionality of google.com
    Given user is on the goolge home page
    When user write "<InputText>" in the search box
    And click on search button
    Then results should be displayed
    
 Examples: 
 |InputText|
 |COVID|