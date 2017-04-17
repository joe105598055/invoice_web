package step;
import cucumber.api.java8.En;
import tw.teddysoft.bdd.domain.invoice.CompanyTranslator;
import tw.teddysoft.bdd.domain.invoice.support.DomainCompanyHelper;

import java.io.IOException;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

/**
 * Created by joe on 2017/4/14.
 */
public class SearchCompanyStep implements En {


    String vatID;
//    CompanyTranslator companyTranslator = new CompanyTranslator();

    DomainCompanyHelper helper;
    public SearchCompanyStep(DomainCompanyHelper helper) {

        this.helper = helper;

        When("^I enter the VAT ID \"([^\"]*)\"$", (String vatID) -> {
            // Write code here that turns the phrase above into concrete actions
            ///web
            helper.getCompanyBuilder().setVatID(vatID);

        });
        Then("^I should see the company name \"([^\"]*)\"$", (String companyName) -> {
            // Write code here that turns the phrase above into concrete actions
            ///web
            try {
                helper.setMyCompany(helper.getCompanyBuilder().search());
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                assertThat(helper.getCompany().getCompanyName(), is (companyName));
            } catch (IOException e) {
                e.printStackTrace();
            }


        });
        When("^I enter the company name \"([^\"]*)\"$", (String companyName) -> {
            // Write code here that turns the phrase above into concrete actions
            ///web
            helper.getCompanyBuilder().setCompanyName(companyName);
        });
        Then("^I should see the VAT ID \"([^\"]*)\"$", (String vatID) -> {
            // Write code here that turns the phrase above into concrete actions
            ///web
            try {
                helper.setMyCompany(helper.getCompanyBuilder().search());
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                assertThat(helper.getCompany().getVatID(), is (vatID));
            } catch (IOException e) {
                e.printStackTrace();
            }

        });
    }
}
