package tw.teddysoft.bdd.domain.invoice;

import java.io.IOException;

/**
 * Created by joe on 2017/4/16.
 */
public class Company {

    String vatID = "";
    String companyName = "";



    public Company (String companyName , String vatID){
        this.vatID = vatID;
        this.companyName = companyName;
    }

    public String getVatID () throws IOException {
        return this.vatID;
    }
    public String getCompanyName () throws IOException {
        return this.companyName;
    }

}
