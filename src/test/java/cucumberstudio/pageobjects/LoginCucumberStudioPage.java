package cucumberstudio.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class LoginCucumberStudioPage {

    By txtEmailCss = By.cssSelector("input[type=email]");
    By txtPasswordCss = By.cssSelector("input[type=password]");
    By btnSigninCss = By.cssSelector("input[type=submit]");
    By errorCss = By.cssSelector("div[class=ht-alert__content]");

    WebDriver driver;
    public LoginCucumberStudioPage(WebDriver driver) {
        this.driver = driver;
    }

    public void open(){
        driver.get("https://studio.cucumber.io/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    public void inputEmail(String email){
        WebElement txtEmail = driver.findElement(txtEmailCss);
        txtEmail.clear();
        txtEmail.sendKeys(email);
    }

    public void inputPassword(String password){
        WebElement txtPassword = driver.findElement(txtPasswordCss);
        txtPassword.clear();
        txtPassword.sendKeys(password);
    }

    public void clickSignin(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement btnSignin = wait.until(ExpectedConditions.visibilityOfElementLocated(btnSigninCss));
        btnSignin.click();
    }

    public String getErrorMessage(){
        return driver.findElement(errorCss).getText();
    }
}
