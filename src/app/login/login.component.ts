import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user.model'
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = "";
  public titlename = "Library Management";
  public loginFormAction = "/user";
  public loginbtn = "Generate OTP";
  public loginbtnId = "";
  public loginEmail = "";
  unamePattern = "([A-z._]+)";
  passPattern = "([0-9]{5})";
  public passShow = false;
  public height = "200";
  buttontype = "";
  userlogin: UserLogin = {
    email: null,
    otp: null,
  };
  ngOnInit() {
    this.resetLogin();
  }
  constructor(private UserService:UserService) {

  }
  passFocusEvent(event) {
    this.loginbtn = "Login";
    this.loginbtnId = "login"
    this.buttontype = "submit";
  }
  loginChange(event) {
    this.loginbtn = "Generate OTP";
    this.loginbtnId = "generateotp"
    this.buttontype = "button";
  }
  loginbtnClick(event) {
    if (this.passShow == false) {
      this.passShow = true;
    }
    this.height = "300";
  }
  loginForm(nuserlogin: UserLogin): void {
    console.log(nuserlogin);
    this.UserService.tryLogin(nuserlogin).subscribe((data:any) =>{
      if(data.Succeeded == true){
        alert("OKAY");
        console.log(data);
      }
    });
  }
  resetLogin(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.userlogin = {
        email: null,
        otp: null
      }
    }
  }
}
