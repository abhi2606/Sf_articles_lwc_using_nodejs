public with sharing class salesforceArticleClass {
    @AuraEnabled(cacheable=true)
    public static Object calloutArticles(){

        try {
            Http http = new Http();
            HttpRequest req = new HttpRequest();
            req.setEndpoint('https://web-scraper-2v-production.up.railway.app/');
            req.setMethod('GET');
            HttpResponse  res = http.send(req);
            if(res.getStatusCode() != 200){
                System.debug('Error fetching the data : '+res.getStatusCode());
                return null;
            }
            List<salesforceArticle>  newList = (List<salesforceArticle>) JSON.deserialize(res.getBody(),List<salesforceArticle>.class );
            return JSON.deserializeUntyped(res.getBody());
        } catch (Exception e) {
            System.debug('Error fetching the data : '+ e.getMessage() + ' ' + e.getStackTraceString());
            return null;
        }
    }

    public class salesforceArticle {
        String title;
        String url;
    }
} 
        
