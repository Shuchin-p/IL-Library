import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username="";
  public titlename="Library Management";
  public loginFormAction="/user";
  constructor(private router: Router) {
    this.router.navigate(['/login']);
   }

  ngOnInit() {
  }

}
