package step;
import cucumber.api.PendingException;
import cucumber.api.java8.En;
import tw.teddysoft.bdd.domain.invoice.companyTranslator;

import java.io.IOException;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

/**
 * Created by joe on 2017/4/14.
 */
public class WebIssuingInvoiceStep implements En {

    String companyName;
    String vatID;
    public WebIssuingInvoiceStep() {
        When("^I enter the VAT ID \"([^\"]*)\"$", (String vatID) -> {
            // Write code here that turns the phrase above into concrete actions
            this.vatID = vatID ;

        });
        Then("^I should see the company name \"([^\"]*)\"$", (String companyName) -> {
            // Write code here that turns the phrase above into concrete actions
            try {
                assertThat(companyTranslator.getCompanyName(this.vatID), is (companyName));
            } catch (IOException e) {
                e.printStackTrace();
            }

        });
        When("^I enter the company name \"([^\"]*)\"$", (String companyName) -> {
            // Write code here that turns the phrase above into concrete actions
            this.companyName = companyName;
        });
        Then("^I should see the VAT ID \"([^\"]*)\"$", (String vatID) -> {
            // Write code here that turns the phrase above into concrete actions
            try {
                assertThat(companyTranslator.getVatID(this.companyName), is (vatID));
            } catch (IOException e) {
                e.printStackTrace();
            }

        });
    }
}
