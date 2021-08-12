import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RssContent } from '../Models/RssContent';


@Injectable({
  providedIn: 'root'
})
export class ParserService {

  baseUrl = 'http://localhost:8080/api'; 
  rssFeed?:any; 
  constructor(private http:HttpClient) { }
  
  getData(url:string): Observable<any> { 

    return this.http.post(this.baseUrl + '/parse', url)
  }

  // setFeed(feed:any) { 
  //   this.rssFeed = feed; 
  //   console.log(this.rssFeed); 
  // }

  // getFeed() { 
  //   return this.rssFeed; 
  // }
}
