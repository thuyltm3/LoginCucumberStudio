package cucumberstudio;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/report"},
        glue = "cucumberstudio.StepDefinitions",
        features = "src/test/resources/cucumberstudio/loginCucumberStudio.feature",
        dryRun = false
)
public class RunCucumberTest {
}
