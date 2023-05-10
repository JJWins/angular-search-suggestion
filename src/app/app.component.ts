import { Component, OnInit } from '@angular/core';
import { SearchSuggestionService } from './search-suggestion/search-suggestion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'search-suggestion';
  data = [];

  constructor(private searchSuggService: SearchSuggestionService) {}

  ngOnInit() {
    this.searchSuggService.getAPIData().subscribe((data:any) => {
      data.forEach(element => {
        this.data.push(element.email);
      });
    })
  }

  getData(event) {
    console.log(event);
  }
}
