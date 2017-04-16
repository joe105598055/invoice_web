package tw.teddysoft.bdd.domain.invoice;

import org.junit.Test;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by joe on 2017/4/16.
 */
public class CompanyTranslatorTest {

    @Test
    public void getVatId_By_CompanyName() throws IOException {
        assertThat(CompanyTranslator.getVatID("泰迪軟體科技有限公司")).isEqualTo("53909614");
    }

    @Test
    public void getCompanyName_By_vatID() throws IOException {
        assertThat(CompanyTranslator.getCompanyName("53909614")).isEqualTo("泰迪軟體科技有限公司");
    }
}
