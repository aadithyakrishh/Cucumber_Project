package Utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooks {
	
	public static WebDriver driver;
	@Before
	public void webDriverInitialization(){
		System.setProperty("webdriver.chrome.driver", "C://Automation//libs//browser drivers//chromedriver.exe");
		System.out.println("This will run before each scenario");
		driver = new ChromeDriver();
	}
	
	@After
	public void closeDriver(){
		System.out.println("This will run after each scenario");
	//	driver.quit();
	}

}
