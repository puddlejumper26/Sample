import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.sass']
})
export class NewsDetailComponent implements OnInit {

  display: boolean = false;

  showDialog() {
      this.display = true;
      // this.fetchDetail();
  }

  constructor() { }

  ngOnInit() {
  }

  getnews(){
    return fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=d5ddc5e99a7042a6a0c6e5db00dfb8b4`)
      .then(res => res.json())
      .then(response => {
        for(var i=0;i<response.articles.length;i++){
          document.getElementById('output').innerHTML
            += "<div style='padding-top:20px;'><img style='float:left;width:150px;' src='"
            +response.articles[i].urlToImage+"'><h1>"
            +response.articles[i].title+"</h1>"
            +response.articles[i].source.name+"-"
            +response.articles[i].author+"<br>"
            +response.articles[i].description+"<br><a href='"
            +response.articles[i].url+"' target='_blank'>"
            +response.articles[i].url+"</a></div>";
        }
      })
  }
}