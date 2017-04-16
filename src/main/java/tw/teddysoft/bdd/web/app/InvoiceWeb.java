package tw.teddysoft.bdd.web.app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.ModelAndView;
import spark.template.velocity.VelocityTemplateEngine;
import tw.teddysoft.bdd.domain.invoice.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static spark.Spark.*;


/**
 * Created by teddy on 2017/3/2.
 */

/**
 * VelocityTemplateRoute example.
 */
public final class InvoiceWeb {

    public static void main(String[] args) {

        get("/invoice", (request, response) -> {
            Map<String, Object> model = new HashMap<>();
            model.put("Title", "三聯式發票");

            return new ModelAndView(model, "invoice_input.vm"); // located in the resources directory
        }, new VelocityTemplateEngine());


        post("/invoice", (request, response) -> {
            Invoice invoice;
            int taxIncludedPrice = integerValue(request.queryMap("taxIncludedPrice").value());
            int taxExcludedPrice = integerValue(request.queryMap("taxExcludedPrice").value());
            double vatRate = request.queryMap("vatRate").doubleValue();

            if (isUseTaxIncludedPriceToCalculateInvoice(taxIncludedPrice)) {
                invoice = InvoiceBuilder.newInstance().
                        withTaxIncludedPrice(taxIncludedPrice).
                        withVatRate(vatRate).
                        issue();
            }
            else {
                invoice = InvoiceBuilder.newInstance().
                        withTaxExcludedPrice(taxExcludedPrice).
                        withVatRate(vatRate).
                        issue();
            }

            Map<String, Object> model = new HashMap<>();
            model.put("invoice", invoice);
            model.put("companyName", "");
            model.put("vatID", "");
            return new ModelAndView(model, "invoice_result.vm"); // located in the resources directory
        }, new VelocityTemplateEngine());

        post("/invoice/company",(request, response) ->{

            Company company;
            CompanyTranslator companyTranslator = new CompanyTranslator();
            String companyName = request.queryMap("companyName").value();
            String vatID = request.queryMap("vatID").value();

            if (isUseCompanyNameToTranslator(companyName)) {
                company = DefaultCompanyBuilder.newInstance()
                        .setCompanyName(companyName)
                        .search();
            }
            else {
                company = DefaultCompanyBuilder.newInstance()
                        .setVatID(vatID)
                        .search();
            }

            Map<String, Object> model = new HashMap<>();
            model.put("company", company);

            Invoice invoice = InvoiceBuilder.newInstance().issue();
            model.put("invoice", invoice);

            return new ModelAndView(model, "invoice_result.vm"); // located in the resources directory
        },new VelocityTemplateEngine());
    }

    private static boolean isUseCompanyNameToTranslator(String CompanyName){
        return !(CompanyName.isEmpty());
    }

    private static boolean isUseTaxIncludedPriceToCalculateInvoice(int taxIncludedPrice){
        return !(0 == taxIncludedPrice);
    }

    private static int integerValue(String str){
        if ((null == str) || ("".equals(str)))
            return 0;
        else
           return Integer.valueOf(str);
    }


}