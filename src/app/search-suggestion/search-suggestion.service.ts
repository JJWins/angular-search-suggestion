import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchSuggestionService {

constructor(private _http: HttpClient) { }

  getAPIData() {
    return this._http.get('https://random-data-api.com/api/v2/users?size=100');
  }

}
