import { Component, OnInit} from '@angular/core';
import { Login } from '../interfaces/login';
import { FormBuilder, FormGroup, Validators, NgControl } from '@angular/forms';
import { LoginService } from '../services/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  public lGroup: FormGroup;
  login: Login = new Login;

  constructor(private lBuilder: FormBuilder, private loginService: LoginService) {
    this.lGroup = this.lBuilder.group({
      'documentNumber': ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9]{10}'),
      ])],
      'password': ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])],
    })
   }  

  setLogin(){
    localStorage.setItem("id", this.lGroup.value.documentNumber.toString());
    console.log(this.login.documentNumber);
    this.lGroup.reset();
  }

  ngOnInit() {
    this.lGroup.reset();
  }
  }

