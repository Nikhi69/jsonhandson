import { Component } from '@angular/core';

@Component({
    selector:'fmovie',
    template:'<h1>Favorite movie is: {{favtmovie}}</h1>'

})

export class MoviesComponent{
   
    favtmovie = "KGF";

        
}