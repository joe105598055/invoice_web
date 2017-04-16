package tw.teddysoft.bdd.domain.invoice.support;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import tw.teddysoft.bdd.domain.invoice.Company;
import tw.teddysoft.bdd.domain.invoice.CompanyBuilder;

import java.io.IOException;

/**
 * Created by joe on 2017/4/16.
 */
public class WebCompanyBuilder implements CompanyBuilder{

    private WebDriver driver = null;

    public WebCompanyBuilder(){
    }

    private WebDriver getWebDriver(){
        if (null == driver){
            System.setProperty("webdriver.chrome.driver" ,  "./chromedriver.exe");
            driver = new ChromeDriver();
            driver.get("http://localhost:4567/invoice");
        }
        return  driver;
    }

    @Override
    public CompanyBuilder setCompanyName(String companyName) {
        getWebDriver().findElement(By.name("companyName")).sendKeys(companyName);
        return this;
    }

    @Override
    public CompanyBuilder setVatID(String vatID) {
        getWebDriver().findElement(By.name("vatID")).sendKeys(vatID);
        return this;
    }

    @Override
    public Company search() throws IOException {
        try{
            getWebDriver().findElement(By.name("search")).click();
            String companyName = getWebDriver().findElement(By.name("companyName")).getAttribute("value");
            String vatID = getWebDriver().findElement(By.name("vatID")).getAttribute("value");
            return new Company(companyName,vatID);
        }
        finally {
            getWebDriver().quit();
        }
    }
}
