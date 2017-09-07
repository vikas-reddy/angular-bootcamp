import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { flatMap } from 'lodash';

import 'rxjs/add/operator/map';

@Injectable()
export class RedditImageSearchService {
  constructor(private http: Http) { }

  search(subReddit: string, search: string): Observable<string[]> {
    const url = 'https://www.reddit.com/r/' +
      subReddit +
      '/search.json?restrict_sr=on&q=' + search;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .map(translateRedditResults);
  }
}

function translateRedditResults(items: any) {
  // This function doesn't know anything about HTTP or Observable; it just
  // manages the messy shape of this API's data return layout.

  return flatMap(items.data.children,
    ((item: {}): string[] => {
      if (item) {
        const data = item['data'];
        if (data) {
          const thumbnail = data['thumbnail'];
          if (thumbnail.startsWith('http')) {
            return [thumbnail];
          }
        }
      }
      return [];
    }));
}
