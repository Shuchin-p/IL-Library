import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor() {
  }
  passFocusEvent(event) {
    this.loginbtn = "Login";
    this.loginbtnId = "login"

  }
  loginChange(event) {
    this.loginbtn = "GenerateOTP";
    this.loginbtnId = "generateotp"

  }
  ngOnInit() {
  }

}
