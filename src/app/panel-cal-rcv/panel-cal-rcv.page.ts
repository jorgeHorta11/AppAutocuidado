import { Component, OnInit } from '@angular/core';
import { Diagnostic } from '../interfaces/diagnostic';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { DiagnosticService } from '../services/diagnosticService';

@Component({
  selector: 'app-panel-cal-rcv',
  templateUrl: './panel-cal-rcv.page.html',
  styleUrls: ['./panel-cal-rcv.page.scss'],
})
export class PanelCalRcvPage implements OnInit {

  datos = new Diagnostic;
    constructor(private router: Router,
              private diagnostic: DiagnosticService
  ) {}

    ToHistoriaPage(){
    this.router.navigate(['panel-cal-rcv']);
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
