package tw.teddysoft.bdd.domain.invoice;

import org.apache.commons.io.IOUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
/**
 * Created by joe on 2017/4/14.
 */
public class CompanyTranslator {

    //http://company.g0v.ronny.tw/api/show/統一編號
    //http://company.g0v.ronny.tw/api/search?q=公司名稱
    public static String getCompanyName(String vatID) {

        if(vatID.length() != 8)
            return "統一編號格式錯誤";

        try {

            URL url = null;
            url = new URL("http://company.g0v.ronny.tw/api/show/" + vatID);
            URLConnection con = url.openConnection();
            InputStream in = con.getInputStream();
            String encoding = con.getContentEncoding();
            encoding = encoding == null ? "UTF-8" : encoding;
            String body = IOUtils.toString(in, encoding); //body
            String result = decode(body); //decode
            JSONObject obj = new JSONObject(result);//convert to json object

            String companyName = obj.getJSONObject("data").get("公司名稱").toString();
            return companyName;

        } catch (Exception e) {

            return "查無此公司";

        }


    }

    public static String getVatID(String companyName) throws IOException {


        try {
            
            URL url = new URL("http://company.g0v.ronny.tw/api/search?q=" +  new String(companyName.getBytes("UTF-8")));
            URLConnection con = url.openConnection();
            InputStream in = con.getInputStream();
            String encoding = con.getContentEncoding();
            encoding = encoding == null ? "UTF-8" : encoding;
            String body = IOUtils.toString(in, encoding); //body
            String result = decode(body); //decode
            JSONObject obj = new JSONObject(result);//convert to json object
            String vatID = obj.getJSONArray("data").getJSONObject(0).getString("統一編號");

             return vatID;

        }catch (Exception e) {

            return "查無此統一編號";

        }
    }

    private static String decode(String s) {
        StringBuilder sb = new StringBuilder(s.length());
        char[] chars = s.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            char c = chars[i];
            if (c == '\\' && chars[i + 1] == 'u') {
                char cc = 0;
                for (int j = 0; j < 4; j++) {
                    char ch = Character.toLowerCase(chars[i + 2 + j]);
                    if ('0' <= ch && ch <= '9' || 'a' <= ch && ch <= 'f') {
                        cc |= (Character.digit(ch, 16) << (3 - j) * 4);
                    } else {
                        cc = 0;
                        break;
                    }
                }
                if (cc > 0) {
                    i += 5;
                    sb.append(cc);
                    continue;
                }
            }
            sb.append(c);
        }
        return sb.toString();
    }
}
