import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../Movies';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  movies!: Movie[];
  constructor(private movieService:MovieService, private router:Router) { }

  refreshTodos(){
    this.movieService.getCustMovies().subscribe(data=> {
      this.movies=data;
    })
    }
      ngOnInit() {
        this.refreshTodos();
      }
      username = sessionStorage.getItem('authenticatedUser');

      addToFavorites(id : Number){
    
        console.log(id);
    
        let movieId = '';
        movieId += id;
    
        this.movieService.addToFavorites(movieId, this.username!).subscribe(
    
          data => {console.log(data)}
    
        );
    
      }
}
