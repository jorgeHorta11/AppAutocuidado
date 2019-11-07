import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  login: Login = new Login;

  constructor() { }  

  setLogin(){
    localStorage.setItem("id", this.login.documentNumber.toString());
    console.log(this.login.documentNumber)
    this.login.documentNumber = null;
    this.login.password = "";
  }

  ngOnInit() {
    this.login.documentNumber = null;
    this.login.password = "";
  }
  }

