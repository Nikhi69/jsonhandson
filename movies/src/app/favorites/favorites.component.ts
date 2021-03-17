import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Movie } from '../Movies';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private favrtService:MovieService,private router:Router,private login:AuthenticationService) { }
favoriteList:Movie[]=[];

  ngOnInit(): void {
    this.favrtService.getFavoriteByusername(sessionStorage.getItem('authenticatedUser')!).subscribe(
      data=>{
        this.favoriteList=data
      }
    )

  }
  refreshPage(){

    this.favrtService.getFavoriteByusername(sessionStorage.getItem('authenticatedUser')!).subscribe(
      data => {console.log(data); this.favoriteList = data}
    );

  }

  deleteFavorites(id : Number){

    console.log(id);
    this.favrtService.deleteFromFavorites(id, sessionStorage.getItem('authenticatedUser')!).subscribe(

      data => {console.log(data); this.refreshPage()}

    );

  }

  username = sessionStorage.getItem('authenticatedUser');

 
}
