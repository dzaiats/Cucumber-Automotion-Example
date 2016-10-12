package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import web.BaseWebMobileElement;

public class HomePage extends BaseWebMobileElement {
    public HomePage(WebDriver driver) {
        super(driver, 30);
    }

    public WebElement mainLogo() {
        return getWebElement(By.id("main-logo"));
    }

    public WebElement topSection() {
        return getWebElement(By.xpath("//*[contains(text(),'TOP')]"));
    }

    public WebElement newSection() {
        return getWebElement(By.xpath("//*[contains(text(),'NEW')]"));
    }

    public WebElement mySection() {
        return getWebElement(By.xpath("//*[contains(text(),'MY')]"));
    }

    public WebElement footer() {
        return getWebElement(By.id("footer"));
    }
}
