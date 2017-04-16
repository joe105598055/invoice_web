package tw.teddysoft.bdd.domain.invoice;

import java.io.IOException;

/**
 * Created by joe on 2017/4/16.
 */
public class DefaultCompanyBuilder implements CompanyBuilder {

    private String vatID = "";
    private String companyName = "";

    public static DefaultCompanyBuilder newInstance(){
        return new DefaultCompanyBuilder();
    }

    @Override
    public DefaultCompanyBuilder setVatID(String vatID){
        this.vatID = vatID;
        this.companyName = "";
        return this;
    }

    @Override
    public DefaultCompanyBuilder setCompanyName(String companyName){
        this.companyName = companyName;
        this.vatID = "";
        return this;
    }

    @Override
    public Company search() throws IOException {

        if(isUseCompanyNameToTranslator()) {

            this.vatID = CompanyTranslator.getVatID(this.companyName);
        }
        else if(isNotTypeAnyField())
        {
            return new Company(this.companyName,this.vatID);
        }

        return new Company(CompanyTranslator.getCompanyName(this.vatID),this.vatID);
    }

    private boolean isUseCompanyNameToTranslator(){
        return (companyName != "");
    }
    private boolean isNotTypeAnyField(){
        return (companyName == "" && vatID == "");
    }

}
