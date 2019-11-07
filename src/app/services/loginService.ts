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

  getAllRegisters() {
    const path = `${this.api}/users`;
    return this.http.get<Login[]>(path);
  }

  getRegister(documentNumber: number) {
    const path = `${this.api}/user/${documentNumber}`;
    return this.http.get<Login>(path);
  }
  
  createLogin(login: Login) {
    const path = `${this.api}/login`;
    return this.http.post(path, login);
  }
}