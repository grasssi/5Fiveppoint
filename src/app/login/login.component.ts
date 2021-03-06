import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any;
  pwdLogin: any;
  st: string = '';

  //Import Register
  @Input() log = RegisterComponent;
  reg: RegisterComponent = new RegisterComponent
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  loginFunction() {
    const test = this.name;
    const pwd = this.pwdLogin
    const obj = JSON.parse(localStorage.getItem('registration') || '[]');
    // function verifEmail(element:any) {

    //   return element.email == test && element.password == pwd;

    //   //return pwdStored.email == pwd;
    // }
    function verifPwd(pwdstored: any) {
      return pwdstored.email == pwd;
    }
    const resultEmail = obj.find((element: any) => element.email == test && element.password == pwd);
    //const resultPwd = obj.find(verifPwd);
    console.log("verif=", resultEmail)

    if (resultEmail != undefined) {
      //window.location.href = "/next-page"
      this.route.navigate(['/next-page'])
    } else {
      console.log("wrong Login")
    }

  };

}

