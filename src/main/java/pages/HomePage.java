package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import web.BaseWebMobileElement;

public class HomePage extends BaseWebMobileElement {
    public HomePage(WebDriver driver) {
        super(driver, 10);
    }

    public WebElement logo(){
        return getWebElement(By.id("main-logo"));
    }

    public WebElement topPhotos(){
        return getWebElement(By.id("top-photos"));
    }

    public WebElement newPhotos(){
        return getWebElement(By.id("new-photos"));
    }

    public WebElement myPhotos(){
        return getWebElement(By.id("my-photos"));
    }

    public WebElement footer(){
        return getWebElement(By.id("footer"));
    }
}
