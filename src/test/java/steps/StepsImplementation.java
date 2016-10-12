package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import http.helpers.EnvironmentHelper;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import util.driver.DriverHelper;
import util.driver.WebDriverFactory;
import verifications.HomePageVerification;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class StepsImplementation {

    private static WebDriver driver;
    private static HomePageVerification homePageVerification;

    @Given("^configuration for '(.+)' driver with browser '(.+)'$")
    public void setup_driver(String driverType, String browserName) throws IOException {
        Map<String, String> map = new HashMap<String, String>();
        if (driverType.toLowerCase().equals("local")) {
            map.put("IS_LOCAL", "TRUE");
        } else if (driverType.toLowerCase().equals("remote")) {
            map.put("IS_REMOTE", "TRUE");
            map.put("EXECUTOR", System.getenv("EXECUTOR"));
        } else if (driverType.toLowerCase().contains("mobile")) {
            String mobileDevice = driverType.split(":")[1].trim();
            map.put("IS_REMOTE", "TRUE");
            map.put("EXECUTOR", System.getenv("EXECUTOR"));
            map.put("MOBILE_DEVICE_EMULATION", mobileDevice);
        } else if (driverType.toLowerCase().equals("mobile")) {
            map.put("IS_MOBILE", "TRUE");
        } else if (driverType.toLowerCase().equals("headless")) {
            map.put("IS_HEADLESS", "TRUE");
            map.put("PHANTOM_JS_PATH", System.getenv("PHANTOM_JS_PATH"));
        }
        map.put("BROWSER", browserName);
        EnvironmentHelper.setEnv(map);
        WebDriverFactory driverFactory = new WebDriverFactory();
        driver = driverFactory.getDriver();
    }

    @Given("^driver is going to be closed$")
    public void driverIsGoingToBeClosed() {
        if (driver != null) {
            driver.quit();
        }
    }

    @When("^home page is opened$")
    public void homePageIsOpened() {
        driver.get("https://www.facey.top");
        DriverHelper.waitForPageIsReady(driver);
    }

    @Then("^base elements are visible$")
    public void baseElementsAreVisible() {
        homePageVerification = new HomePageVerification(driver);

        String error = homePageVerification.baseElementsArePresented();
        Assert.assertTrue(error, error.length() == 0);
    }

    @And("^page language is '(.+)'$")
    public void pageLanguageIs(String lang) throws IOException {
        String error = homePageVerification.baseLanguageVerification(lang);
        Assert.assertTrue(error, error.length() == 0);
    }

    @After
    public void embedScreenshotOnFail(Scenario s) {
        if (s.isFailed()) {
            try {
                byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                s.embed(screenshot, "image/png");
                s.write("URL at failure: " + driver.getCurrentUrl());
            } catch (WebDriverException wde) {
                s.write("Embed Failed " + wde.getMessage());
            } catch (ClassCastException cce) {
                cce.printStackTrace();
            }
        }
    }
}
