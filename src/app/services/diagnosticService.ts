import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Diagnostic } from '../interfaces/diagnostic';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  private api = 'https://back-selfcareapp.herokuapp.com/selfcare';

  constructor(
    private http: HttpClient
  ) { }

  getAllDiagnostic() {
    const path = `${this.api}/finalDx`;
    return this.http.get<Diagnostic[]>(path);
  }

  getDiagnostic(documentNumber: number) {
    const path = `${this.api}/finalDx/${documentNumber}`;
    return this.http.get<Diagnostic>(path);
  }
  
  createDiagnostic(register: Diagnostic) {
    const path = `${this.api}/finalDx`;
    return this.http.post(path, register);
  }
}
