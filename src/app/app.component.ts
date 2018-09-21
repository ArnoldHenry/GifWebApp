import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Giphy WebApp';
  trendingURL = "http://api.giphy.com/v1/gifs/trending";
  linkSearch = "http://api.giphy.com/v1/gifs/search?q=";
  http:Http;
  giphies=[];
  trendgifs=[];
  page: number=1;
  
  constructor(http:Http){
    this.http = http;

  //  var giflink = this.link;
  //  console.log(giflink);

   var fullLInk = this.trendingURL+"?api_key="+environment.API;
   
    this.http.request(fullLInk)
    .subscribe((newres:Response)=>{
      this.trendgifs = newres.json().data
      console.log(newres.json().data);
    })
  } 
  onScroll(){
    console.log("scrolled");  
    this.page = this.page + 1;  
    this.constructor(); 
  }


  PerformSearch(SearchTerm: HTMLInputElement):void{
    
    var apiLink = this.linkSearch + SearchTerm.value+"&api_key="+environment.API;
    console.log(apiLink);
    
    this.http.request(apiLink)
        .subscribe((res:Response)=>{
          this.giphies = res.json().data
          console.log(res.json());
        });
  }  


}
