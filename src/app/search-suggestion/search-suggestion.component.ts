import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchSuggestionService } from './search-suggestion.service';

@Component({
  selector: 'app-search-suggestion',
  templateUrl: './search-suggestion.component.html',
  styleUrls: ['./search-suggestion.component.css']
})
export class SearchSuggestionComponent implements OnInit {

  @Input() inputData = [];
  @Output() selectedData = new EventEmitter<string>();
  data;
  suggestions = [];
  selected: boolean = false;
  hasData: boolean = false;

  constructor(private searchSuggService: SearchSuggestionService) { }

  ngOnInit() {
    
  }

  checkemail(event) {
    this.suggestions = [];
    this.selected = false;
    this.hasData = false;
    this.inputData.forEach(element => {
      if(element.replace('@email.com').includes(event.target.value)) {
        this.suggestions.push(element);
        this.hasData = true;
      }
    });
    if(event.target.value == '') {
      this.suggestions = [];
      this.hasData = false;
    }
  }

  onBlur() {
    setTimeout(() => {
      this.hasData = false
    }, 150);
  }

  outputData(value: string) {
    this.selectedData.emit(value);
    this.selected = true;
    this.data = value;
  }

}
