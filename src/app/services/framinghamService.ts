import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Framingham } from '../interfaces/framingham';

@Injectable({
  providedIn: 'root'
})
export class FraminghamService {

  private api = 'https://back-selfcareapp.herokuapp.com/selfcare';

  constructor(
    private http: HttpClient
  ) { }

 
  getHome(documentNumber: number) {
    const path = `${this.api}/panel-cal-dia2?documentNumber=${documentNumber}`;
    return this.http.get<Framingham>(path);
  }  
  createFramingham(framingham: Framingham) {
    const path = `${this.api}/panel-cal-dia2`;
    return this.http.post(path, framingham);
  }
  
}