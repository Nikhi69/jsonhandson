import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:user[];
info:Observable<any>;
error:boolean=false;
errorMsg: string;
  constructor(private http: HttpClient,private userService: UserService) {
    
   }

  ngOnInit(){
this.userService.getAllUsers().subscribe(users=>{
  this.users=users.data;
})
}

createUser(){
this.http.post<any>("https://reqres.in/api/users?page=2",{
  "id":1,
  "email":"george.bluth@reqres.in",
  "first_name":"George",
  "last_name":"Bluth",
  "avatar":"https://reqres.in/img/faces/1-image.jpg"
}  ).toPromise().then((data:any)=> 
// console.log(JSON.stringify(data))
this.users.splice(0,0,data)
)
}

updateUser(user){
 this.http.put('https://reqres.in/api/users?page=2/'+user.id,JSON.stringify({
   "id":user.id,
   "email":"gag.bluth@reqres.in",
   "first_name":"John",
   "last_name":"Cena",
   "avatar":"https://reqres.in/img/faces/1-image.jpg"
 })).subscribe(res=>{
  let index= this.users.indexOf(user);
  console.log(JSON.stringify(res) );
  //this.users.splice(index,1);
 })
//  this.userService.updateUser(user.id,newData);
 }

 deleteUser(user){
   this.http.delete('https://reqres.in/api/users?page=2/'+user.id).subscribe(res=>{
     let index= this.users.indexOf(user);
     this.users.splice(index,1);
   })
 }



 register(){
   this.userService.register().subscribe(res=>{
     console.log(res);
   },
   error=>{
     console.log("error");
     this.errorMsg="error"
     this.error =true;
   })
 }

}



//  register(){
//   this.info=this.userService.register().pipe(catchError(error=>{
//     if(error.error instanceof ErrorEvent){

//       this.errorMsg=`Error: ${error.error.message}`;
//       this.error=true;
//     }else{
//       this.errorMsg=`Error:${error.message}`;
//     }
//     return of([]);
//   }));
//  }