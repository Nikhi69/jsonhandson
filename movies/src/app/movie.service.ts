import { Movie } from './Movies';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  getAdminMovies(){
    return this.http.get<Movie[]>(`http://localhost:8080/adminmovielist`).pipe();
  }
  
  getCustMovies(){
   
    return this.http.get<Movie[]>(`http://localhost:8080/customermovielist`).pipe();
  }
  retrieveMovie(id:number){
    return this.http.get<Movie>(`http://localhost:8080/getmovie/${id}`);
  }

  updateMovie(id:any,movie:any){
return this.http.put(`http://localhost:8080/edit/${id}`,movie);
  }

  getFavoriteByusername(username: string){
    return this.http.get<any>(`http://localhost:8080/viewfavrt/${username}`);
  }
  
  deleteFromFavorites(id : Number, username : String){

    return this.http.delete(`http://localhost:8080/delete/${username}/${id}`)

  }

  addToFavorites(id : string, username : String){

    return this.http.post(`http://localhost:8080/add-to-favorites/${username}`, id);

  }

}
