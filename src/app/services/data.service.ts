import {Injectable} from '@angular/core';
import {Http} from "@angular/http";


@Injectable()
export class DataService {


  constructor(private http: Http) {
  }

  // Get all sources if category not specified
  getSourceList(category?:string) {
    if (category) {
      category = '&category=' + category;
    } else {
      category = '';
    }
    return this.http
      .get('https://newsapi.org/v1/sources?language=en&country=us'+ category);
  }

  // Get articles from a source
  getArticles(source: string) {
    return this.http
      .get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=e3bbe9f68e764688869a9e4557e42850');
  }

}
