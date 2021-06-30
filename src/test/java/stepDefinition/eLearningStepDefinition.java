package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Utilities.hooks;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class eLearningStepDefinition {
	
/*	@FindBy(xpath="//a[contains(text(),'Sign up!')]")
	private WebElement btn_signUp;
	
	@FindBy(xpath=("//input[@name='status']/..//p[contains(text(),'Follow')]"))
	private WebElement btn_followCourses;
*/
	WebDriver driver = hooks.driver;
	WebDriverWait wait = new WebDriverWait(driver,5);
	
	@Given("^User has launched the eLearning Site$")
	public void user_is_in_the_has_launched_the_eLearning_Site()  {
		//Launch the eLarning site using the URL
		driver.get("http://elearningm1.upskills.in/");
		driver.manage().window().maximize();
	    
	}

	@When("^User clicks on the sign up button$")
	public void user_clicks_on_the_sign_up_button() throws InterruptedException  {
	    // click on the Sign-Up link to start the registration process
		System.out.println(driver.getCurrentUrl());
		Thread.sleep(3000);
	//	btn_signUp.click();	   
		driver.findElement(By.xpath("//a[contains(text(),'Sign up!')]")).click();
		System.out.println("Sign Up button is selected");		
	}

	@Then("^User confirm follow courses checkbox is selected$")
	public void user_confirm_follow_courses_checkbox_is_selected() throws InterruptedException  {
	    // User confirms that follow courses radio button is selected
		Thread.sleep(3000);
		WebElement btn_followCourses = driver.findElement(By.xpath("//input[@name='status']/..//p[contains(text(),'Follow')]"));
		if(!btn_followCourses.isSelected())
			btn_followCourses.click();
	    System.out.println("Follow Courses radio button is selected");
	}

	@Then("^User enters the FirstName as \"([^\"]*)\"$")
	public void user_enters_the_FirstName_as(String firstName)  {
	    // Write code here that turns the phrase above into concrete actions
		WebElement txt_firstName = driver.findElement(By.xpath("//input[@id='registration_firstname']"));
		txt_firstName.sendKeys(firstName);
		System.out.println("User enters the FirstName");
	}

	@Then("^User enters the LastName as \"([^\"]*)\"$")
	public void user_enters_the_LastName_as(String lastName)  {
	    // Write code here that turns the phrase above into concrete actions
		WebElement txt_lastName = driver.findElement(By.xpath("//input[@id='registration_lastname']"));
		txt_lastName.sendKeys(lastName);
		System.out.println("User enters the LastName");	    
	}

	@Then("^User enters the email as \"([^\"]*)\"$")
	public void user_enters_the_email_as(String email)  {
	    // Write code here that turns the phrase above into concrete actions
		WebElement txt_email = driver.findElement(By.xpath("//input[@id='registration_email']"));
		txt_email.sendKeys(email);
		System.out.println("User enters the email");
	}

	@Then("^User enters the username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String userName)  {
	    // Write code here that turns the phrase above into concrete actions
		WebElement txt_userName = driver.findElement(By.xpath("//input[@id='username']"));
		txt_userName.sendKeys(userName);
		System.out.println("User enters the username");	    
	}

	@Then("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password)  {
	    // Write code here that turns the phrase above into concrete actions
		WebElement txt_password = driver.findElement(By.xpath("//input[@id='pass1']"));
		txt_password.sendKeys(password);
		System.out.println("User enters the password");    
	}

	@Then("^User enters the confirm password as \"([^\"]*)\"$")
	public void user_enters_the_confirm_password_as(String password)  {
	    // Write code here that turns the phrase above into concrete actions
		WebElement txt_confirmPassword = driver.findElement(By.xpath("//input[@id='pass2']"));
		txt_confirmPassword.sendKeys(password);
		System.out.println("User enters the confirmPassword");    
	}

	@Then("^User clicks on register button$")
	public void user_clicks_on_register_button() throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
		WebElement btn_register = driver.findElement(By.xpath("//button[@id='registration_submit']"));
		btn_register.click();
		Thread.sleep(3000);
		System.out.println("User clicks on register button");
	    
	}

	@Then("^User Registration is successful$")
	public void user_Registration_is_successful()  {
	    // Write code here that turns the phrase above into concrete actions
		String sectionHeader = driver.findElement(By.xpath("//section[@id='cm-content']//ul[@class='breadcrumb']/li[.='Registration']")).getText();
		if(sectionHeader.equalsIgnoreCase("Registration"))
			System.out.println("Registration is Successful");
		System.out.println("User Registration is successful");	    
	}

	@Then("^User clicks on the Profile drop down at top right corner$")
	public void user_clicks_on_the_Profile_drop_down_at_top_right_corner()  {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//div[@id='navbar']//a[@role='button']")).click();
		System.out.println("User clicks on the Profile drop down at top right corner");
	    
	}

	@Then("^User verifies the email address given as \"([^\"]*)\"$")
	public void user_verifies_the_email_address_given_as(String email)  {
	    // Write code here that turns the phrase above into concrete actions
	//	driver.findElement(By.xpath("//a[@role='button']")).click();
		String profileEmail = driver.findElement(By.xpath("//a[@role='button']/../ul/li//a/../p")).getText();
		if(profileEmail.equalsIgnoreCase(email))
			System.out.println("Profile email is verified successfully");
		System.out.println("User verifies the email address given");
	    
	}

	@Then("^User clicks on the inbox link$")
	public void user_clicks_on_the_inbox_link()  {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//a[@role='button']/../ul/li[3]")).click();
		System.out.println("User clicks on the inbox link");
	}

	@Then("^User is redirected to Messages page$")
	public void user_is_redirected_to_Messages_page() throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//section[@id='cm-content']//ul[@class='breadcrumb']//li[text()='Inbox']")));
	    System.out.println("User is redirected to Messages page");
	}

	@Then("^User clicks on the compose message button$")
	public void user_clicks_on_the_Compose_message_button()  {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//img[@alt='Compose message']")).click();
		System.out.println("User clicks on the Compose message button");    
	}

	@Then("^User is directed to the compose email page$")
	public void user_is_directed_to_the_compose_email_page()  {
	    // Write code here that turns the phrase above into concrete actions
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//section[@id='cm-content']//ul[@class='breadcrumb']//li[text()='Compose message']")));
		System.out.println("User is directed to the compose email page");
	}

	@Then("^User enters the recepient email address as \"([^\"]*)\"$")
	public void user_enters_the_recepient_email_address_as(String recieverEmail) throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//ul[@class='select2-selection__rendered']//input[@role='textbox']")).sendKeys(recieverEmail);
	    Thread.sleep(2000);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//ul[@id='select2-compose_message_users-results']/li")));
	    String recipientName = driver.findElement(By.xpath("//ul[@id='select2-compose_message_users-results']/li")).getText();
		driver.findElement(By.xpath("//ul[@id='select2-compose_message_users-results']/li")).click();
	    System.out.println("User enters the recepient email address");
	}

	@Then("^User enter the subject text as \"([^\"]*)\"$")
	public void user_enter_the_subject_text_as(String mailSubject)  {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='compose_message_title']")).sendKeys(mailSubject);
		System.out.println("User enter the subject text");
	}

	@Then("^User enters the message body as \"([^\"]*)\"$")
	public void user_enters_the_message_body_as(String messageBody)  {
	    // Write code here that turns the phrase above into concrete actions
		driver.switchTo().frame(0);
		
		driver.findElement(By.xpath("//body/p")).sendKeys(messageBody);
		System.out.println("User enters the message body");
		driver.switchTo().defaultContent();
	}

	@Then("^User clicks on the Send Message button$")
	public void user_clicks_on_the_Send_Message_button()  {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//button[@id='compose_message_compose']")).click();
		System.out.println("User clicks on the Send Message button");
	}

	@Then("^User confimrs the acknowledgement$")
	public void user_confimrs_the_acknowledgement()  {
	    // Write code here that turns the phrase above into concrete actions
	    if(driver.findElement(By.xpath("//section[@id='cm-content']/div[@class='container']//div[@class='alert alert-success']")).isDisplayed())
	    	System.out.println("MEssage is sent successfully");
		System.out.println("User confimrs the acknowledgement");
	}

}
