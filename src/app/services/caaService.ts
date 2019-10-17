import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CAA } from './../interfaces/caa';

@Injectable({
  providedIn: 'root'
})
export class CAAService {

  private api = 'https://back-selfcareapp.herokuapp.com/selfcare';

  constructor(
    private http: HttpClient
  ) { }

 
  getCAA(documentNumber: number) {
    const path = `${this.api}/home?documentNumber=${documentNumber}`;
    return this.http.get<CAA>(path);
  }  

  createCAA(caa:CAA){
        const path = `${this.api}/caa`;
        return this.http.post(path, caa);
  }
  
}
