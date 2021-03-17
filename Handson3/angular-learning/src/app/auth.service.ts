import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedIn:boolean;

login(){
  this.loggedIn=true;
}
logout(){
  this.loggedIn=false;
}

LoggedIn(){
  return this.loggedIn;
}
  constructor() { }
}
