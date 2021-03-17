import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  username='';
  password='';

  handleLogin(){
    this.loginService.login(this.username,this.password).subscribe(
      data=>{
        this.router.navigate(['customerlist'])
      }
    )

    const user=sessionStorage.getItem('authenticatedUser');
  }

}
