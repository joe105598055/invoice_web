package tw.teddysoft.bdd.domain.invoice;

import org.junit.Test;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by joe on 2017/4/16.
 */
public class WhenSearchCompanyTest {

    @Test
    public void search_By_companyName() throws IOException {

        Company company = DefaultCompanyBuilder.newInstance()
                .setCompanyName("泰迪軟體科技有限公司")
                .search();

        assertThat(company).isNotNull();
        assertThat(company.getVatID()).isEqualTo("53909614");
        assertThat(company.getCompanyName()).isEqualTo("泰迪軟體科技有限公司");

    }

    @Test
    public void search_By_vatID() throws IOException {

        Company company = DefaultCompanyBuilder.newInstance()
                .setVatID("53909614")
                .search();

        assertThat(company).isNotNull();
        assertThat(company.getVatID()).isEqualTo("53909614");
        assertThat(company.getCompanyName()).isEqualTo("泰迪軟體科技有限公司");

    }

    @Test
    public void search_By_Last_type() throws IOException {

        Company company = DefaultCompanyBuilder.newInstance()
                .setVatID("53909614")
                .setCompanyName("泰迪軟體科技有限公司")
                .search();

        assertThat(company).isNotNull();
        assertThat(company.getVatID()).isEqualTo("53909614");
        assertThat(company.getCompanyName()).isEqualTo("泰迪軟體科技有限公司");

    }
}
