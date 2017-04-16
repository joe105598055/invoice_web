package tw.teddysoft.bdd.domain.invoice;

import java.io.IOException;

/**
 * Created by joe on 2017/4/16.
 */
public class DefaultCompanyBuilder {

    private String vatID = "";
    private String companyName = "";
    public static DefaultCompanyBuilder newInstance(){
        return new DefaultCompanyBuilder();
    }
    public DefaultCompanyBuilder setVatID(String vatID){
        this.vatID = vatID;
        this.companyName = "";
        return this;
    }
    public DefaultCompanyBuilder setCompanyName(String companyName){
        this.companyName = companyName;
        this.vatID = "";
        return this;
    }
    public Company search() throws IOException {

        if(isUseCompanyNameToTranslator()) {

            this.vatID = CompanyTranslator.getVatID(this.companyName);
        }

        return new Company(CompanyTranslator.getCompanyName(this.vatID),this.vatID);
    }

    private boolean isUseCompanyNameToTranslator(){
        return (companyName != "");
    }

}
