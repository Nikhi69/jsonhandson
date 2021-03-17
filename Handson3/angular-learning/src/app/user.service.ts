import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { user } from './user/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url='https://reqres.in.';
  users:user [];
  constructor(private http: HttpClient) { }
 
  getAllUsers() : Observable<any> {
    return this.http.get<any>("https://reqres.in/api/users?page=2").pipe();
  }

  updateUser(id,newData){
    return this.http.put('https://reqres.in/api/users?page=2/'+id,newData).toPromise().then((data:any)=> 
    console.log(JSON.stringify(data))
    // this.users.push(data)
    );
   
   }

register():Observable<any>{
 return this.http.get(this.url);
}
}




// ,{
//       headers:new HttpHeaders({
//         'Content-Type':'application/json'
//       })
//     }

//  userdata={
//       "id":1,
//       "email":"george.bluth@reqres.in",
//       "first_name":"George",
//       "last_name":"Bluth",
//       "avatar":"https://reqres.in/img/faces/1-image.jpg"
//     }
//   createUser(userdata){
    
//     this.http.post<any>("https://reqres.in/api/users?page=2",JSON.stringify(userdata)).subscribe(res=>{
//       this.users.push(userdata)
//     })