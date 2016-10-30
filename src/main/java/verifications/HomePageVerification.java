package verifications;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pages.HomePage;
import util.driver.PageValidator;
import util.validator.LanguageChecker;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.apache.log4j.Level.ERROR;

public class HomePageVerification {
    private final static Logger LOG = LoggerFactory.getLogger(HomePageVerification.class);

    private WebDriver driver;
    private HomePage page;

    public HomePageVerification(WebDriver driver){
        this.driver = driver;
        page = new HomePage(driver);
    }

    public String baseElementsArePresented() {
        StringBuilder errorMessage = new StringBuilder();

        try {
            List<WebElement> elementsToVerify = new ArrayList<WebElement>();

            elementsToVerify.add(page.logo());
            elementsToVerify.add(page.topPhotos());
            elementsToVerify.add(page.newPhotos());
            elementsToVerify.add(page.myPhotos());
            elementsToVerify.add(page.footer());

            if (!PageValidator.elementsAreAlignedProperly(elementsToVerify)) {
                errorMessage.append("\nElements are aligned not properly");
            }

        } catch (Exception e) {
            errorMessage.append(e.getCause().getMessage().split("\n")[0]);
        }

        return errorMessage.toString();
    }


    public String baseLanguageVerification(String lang) throws IOException {
        String error = "";

        if (!LanguageChecker.isCorrectLanguageOnThePage(driver, lang)){
            error += "\nPage language is not " + lang;
        }

        return error;
    }

    private String elementExists(WebElement element) {
        String error = "";

        try {
            element.isDisplayed();
        } catch (Exception e) {
            LOG.error(e.getMessage());
            error = e.getMessage();
        }

        return error;
    }
}
