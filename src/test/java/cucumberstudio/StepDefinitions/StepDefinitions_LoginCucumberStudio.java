package cucumberstudio.StepDefinitions;

import cucumberstudio.pageobjects.LoginCucumberStudioPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class StepDefinitions_LoginCucumberStudio {

    WebDriver driver;
    LoginCucumberStudioPage loginPage;

    public StepDefinitions_LoginCucumberStudio()
    {
        this.driver= Hooks.driver;
        loginPage = new LoginCucumberStudioPage(this.driver);
    }

    @Given("^The login screen is displayed on browser$")
    public void the_login_screen_is_displayed_on_browser() {
        loginPage.open();
    }

    @When("^The user login with valid (.+) and valid (.+)$")
    public void the_user_login_with_valid_and_valid(String email, String password) {
        loginPage.inputEmail(email);
        loginPage.inputPassword(password);
        loginPage.clickSignin();
    }

    @Then("^The homepage will be showed$")
    public void the_homepage_will_be_showed() throws InterruptedException {
        Thread.sleep(5000);
        String title = this.driver.getTitle();
        Assert.assertTrue(title.contains("CucumberStudio"));
    }


    @When("^The user login with invalid (.+) and valid (.+)$")
    public void the_user_login_with_invalid_and_valid(String email, String password) {
        loginPage.inputEmail(email);
        loginPage.inputPassword(password);
        loginPage.clickSignin();
    }

    @Then("^The error (.+) is showed$")
    public void the_error_is_showed(String message)  {
        Assert.assertTrue(loginPage.getErrorMessage().contains(message));
    }
}
