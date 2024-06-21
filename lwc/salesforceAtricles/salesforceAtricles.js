import { LightningElement, wire } from 'lwc';
import calloutArt from '@salesforce/apex/salesforceArticleClass.calloutArticles';
import IMAGES from "@salesforce/resourceUrl/SalesforceArticle";

export default class SalesforceAtricles extends LightningElement {

  sfImage = IMAGES;

  articles;
  @wire(calloutArt)
  wireMethod(data,error) {
    if(data){
      console.log(data);
      console.log(data.data);
      this.articles = data.data;
    }
    if(error){
      console.log(error);
    }
  }

  // fetchData() {
  //   this.articles = calloutArticles();
  // }

  // connectedCallback() {
  //   this.fetchData();
  // }

  // async fetchData() {
  //   try{
  //     const response = await fetch('https://web-scraper-2v-production.up.railway.app');
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   catch(error){
  //     console.log('Error fetching data: ',error);
  //   }
  // }
}