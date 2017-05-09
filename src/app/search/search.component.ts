import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  movie: Array<Object>;

  constructor(private _searchService: SearchService, private route: ActivatedRoute, private router: Router)  {
    this._searchService.getMovies().subscribe(res => {
        this.movie = res.results;
    });
  }
}
