package tw.teddysoft.bdd.domain.invoice.support;

import tw.teddysoft.bdd.domain.invoice.Company;
import tw.teddysoft.bdd.domain.invoice.CompanyBuilder;

/**
 * Created by joe on 2017/4/17.
 */
public class DomainCompanyHelper {

    CompanyBuilder builder;
    Company company;

    public DomainCompanyHelper(CompanyBuilder builder){
        this.builder = builder;
    }

    public CompanyBuilder getCompanyBuilder() {
        return builder;
    }

    public void setMyCompany(Company searched) {
        company = searched;
    }

    public Company getCompany() {
        return company;
    }
}
