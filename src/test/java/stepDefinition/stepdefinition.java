package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import Utilities.hooks;

public class stepdefinition {
	
	WebDriver driver =  hooks.driver;
	
	@Given("^user is on the goolge home page$")
	public void user_is_on_the_goolge_home_page()  {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://google.co.in");
	    
	}

	@When("^user write \"([^\"]*)\" in the search box$")
	public void user_write_in_the_search_box(String InputText) {
	    driver.getTitle();
		
	}

	@And("^click on search button$")
	public void click_on_search_button() {
	    System.out.println("This is Step 3");
	    
	}

	@Then("^results should be displayed$")
	public void results_should_be_displayed() {
		System.out.println("This is Step 4");
	    
	}



}
