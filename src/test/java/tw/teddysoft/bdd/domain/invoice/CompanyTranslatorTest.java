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

    @Test
    public void enter_NotExist_Company() throws IOException {
        assertThat(CompanyTranslator.getVatID("王小明有限公司")).isEqualTo("查無此統一編號");
    }

    @Test
    public void enter_NotExist_VatID() throws IOException {
        assertThat(CompanyTranslator.getCompanyName("12345678")).isEqualTo("查無此公司");
    }

    @Test
    public void enter_ErrorVatId_Format() throws IOException {
        assertThat(CompanyTranslator.getCompanyName("1234567")).isEqualTo("統一編號格式錯誤");
    }




}
