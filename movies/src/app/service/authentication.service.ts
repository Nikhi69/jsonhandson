import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {

   }
log : boolean=false;

loggedIn():boolean{
  return this.log;
}

logout(){
  this.log=false;
  sessionStorage.removeItem('authenticatedUser');
}

   login(username:string,password:string){
     let basicAuthenticationHeader ='Basic '+btoa(username+':'+password);
     let headers=new HttpHeaders({
       Authorization:basicAuthenticationHeader
     })

     return this.http.get("http://localhost:8080/login",{headers,responseType:'text'as 'json'})
     .pipe(
       map((data: any)=>{
         sessionStorage.setItem('authenticatedUser',<string>username);
         this.log=true;
         return data
       })
     )
   }
}
