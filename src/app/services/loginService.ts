import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Login } from './../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api = 'https://back-selfcareapp.herokuapp.com/selfcare';

  constructor(
    private http: HttpClient
  ) { }

  getlogin(documentNumber: number) {
    const path = `${this.api}/login/${documentNumber}`;
    return this.http.get<Login>(path);
  }
  
  createLogin(login: Login) {
    const path = `${this.api}/login`;
    return this.http.post(path, login);
  }
}