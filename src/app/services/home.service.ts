import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Home } from './../interfaces/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private api = 'https://back-selfcareapp.herokuapp.com/selfcare';

  constructor(
    private http: HttpClient
  ) { }

 
  getHome(documentNumber: number) {
    const path = `${this.api}/home?documentNumber=${documentNumber}`;
    return this.http.get<Home>(path);
  }  
  
}
