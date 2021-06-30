package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        	features = "src/test/java/feature", // should be the package name
        	glue= {"stepDefinition","Utilities"}, // should be the java class name not package name
        	//tags= {"@Regression","@Smoke"}  //AND Condition
        	//tags= {"@Regression,@Smoke"}  //OR Condition
           // tags= {"@Regression"},
            monochrome = true,
            dryRun = false,
            plugin = {"pretty", "html:Reports/" , "json:Reports/jsonreport.json", "junit:Reports/xmlreport.xml"}
        )

public class eLearningTestRunner {
	
	
}
