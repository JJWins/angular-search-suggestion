/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchSuggestionService } from './search-suggestion.service';

describe('Service: SearchSuggestion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchSuggestionService]
    });
  });

  it('should ...', inject([SearchSuggestionService], (service: SearchSuggestionService) => {
    expect(service).toBeTruthy();
  }));
});
