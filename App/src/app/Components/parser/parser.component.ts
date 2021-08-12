import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParserService } from 'src/app/Services/parser.service';

import { RssContent } from 'src/app/Models/RssContent';


@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css']
})
export class ParserComponent implements OnInit {

  rssUrl:string = ''; 
  content:RssContent = { 
    title: '', 
    description: '',
    entries: null  
  }

  constructor(private parserService:ParserService, private router:Router) { }

  ngOnInit(): void {
  }

  getFeed() { 
    this.parserService.getData(this.rssUrl).subscribe(res => { 
      // this.parserService.setFeed(res); 
      this.content = res; 
      console.log(this.content); 
      console.log(this.content.entries); 
    })
  }

  displayFeed() { 
  }

}
