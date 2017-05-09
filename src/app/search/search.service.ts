import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SearchService {
  apiKey: string;
  constructor(private _jsonp: Jsonp, private http: Http) {
    this.apiKey = 'e97eaa02e82340186f1b34ada44c901f';
    console.log('Movie service initialized');
  }

  getMovies(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_year=2017&sort_by=popularity.desc&include_adult=true&page=1&api_key='+this.apiKey)
      .map(res => res.json());
  }

}
