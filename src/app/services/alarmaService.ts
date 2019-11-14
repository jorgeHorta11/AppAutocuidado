import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Alarma } from './../interfaces/alarma';

@Injectable({
  providedIn: 'root'
})
export class AlarmaService {

  private api = 'https://back-selfcareapp.herokuapp.com/selfcare';

  constructor(
    private http: HttpClient
  ) { }

  getAlarma(documentNumber: number) {
    const path = `${this.api}/alarma?documentNumber=${documentNumber}`;
    return this.http.get<Alarma>(path);
  }

  createAlarma(alarma: Alarma) {
        const path = `${this.api}/alarma`;
        return this.http.post(path, alarma);
  }
}
