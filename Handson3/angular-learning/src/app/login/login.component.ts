import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string='';
password:string='';
errorMessage:string;
isValid:boolean=false;


  constructor(private router:Router,private authService:AuthService) { 
    
  }
login(){
      if(this.username=="admin" && this.password=="password"){
        this.authService.login();
        this.isValid=false;
        this.router.navigateByUrl('/viewempreact');
        this.errorMessage="Logged in successfully";
      }else{
        this.isValid=true;
        this.errorMessage="Invalid username and password";
      }
    }
  ngOnInit():void {
    
  }

}
