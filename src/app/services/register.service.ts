import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Register } from './../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private api = 'https://back-selfcareapp.herokuapp.com/selfcare';

  constructor(
    private http: HttpClient
  ) { }

  getAllRegisters() {
    const path = `${this.api}/users`;
    return this.http.get<Register[]>(path);
  }

  getRegister(documentNumber: number) {
    const path = `${this.api}/user/${documentNumber}`;
    return this.http.get<Register>(path);
  }
  
  createRegister(register: Register) {
    const path = `${this.api}/register`;
    return this.http.post(path, register);
  }
}
