package tw.teddysoft.bdd.domain.invoice;

import java.io.IOException;

/**
 * Created by joe on 2017/4/16.
 */
public interface CompanyBuilder {

    public static CompanyBuilder newInstance(){
        return new DefaultCompanyBuilder();
    }
    public CompanyBuilder setCompanyName(String companyName);

    public CompanyBuilder setVatID(String vatID);

    public Company search()throws IOException;

}
