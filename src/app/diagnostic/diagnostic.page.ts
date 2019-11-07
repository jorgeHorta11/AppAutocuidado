import { Component, OnInit } from '@angular/core';
import { Diagnostic } from '../interfaces/diagnostic';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { DiagnosticService } from '../services/diagnosticService';

@Component({
  selector: 'diagnostic',
  templateUrl: './diagnostic.page.html',
  styleUrls: ['./diagnostic.page.scss'],
})
export class DiagnosticPage implements OnInit {

  datos = new Diagnostic;
    constructor(private router: Router,
              private diagnostic: DiagnosticService
  ) {}

    ToHistoriaPage(){
    this.router.navigate(['/tabs/tab3']);
  }
  ngOnInit(){
    let id = localStorage.getItem("id"); 
    let idNumber = parseInt(id);
    console.log("Este es el id", id);
    
    this.diagnostic.getDiagnostic(idNumber)
    .subscribe(diagnostic => {
      console.log(diagnostic);      
      this.datos = diagnostic;
    });
  }

}
