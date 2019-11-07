import { Component, OnInit } from '@angular/core';
import { Diagnostic } from '../interfaces/diagnostic';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { DiagnosticService } from '../services/diagnosticService';
import { NOC } from '../interfaces/noc';

@Component({
  selector: 'diagnostic',
  templateUrl: './diagnostic.page.html',
  styleUrls: ['./diagnostic.page.scss'],
})
export class DiagnosticPage implements OnInit {
    datos: any =  []; 
    nocs: any =  [];
    nics: any =  [];
    diagnostics: any =  [];
    diagnosticsList: any =  [];
    
    nocList: any =  [];
    nicList: any =  [];

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
      console.log(diagnostic.domainName);      
      this.datos = diagnostic;
      this.nocs = diagnostic.noc;
      this.nics = diagnostic.nic;
      this.diagnostics = diagnostic.diagnostic;
      this.diagnosticsList = diagnostic.diagnostic.caracteristicsList;
      this.nicList = diagnostic.nic.activitiesList;
      this.nocList = diagnostic.noc.indicatorsList;

      console.log("Desde Diagnóstico",this.datos)

      
      
    });
  }

  /*objectKeys (datos) {
    const keys = Object.keys(datos);
    console.table("Estos son los datos",keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"
    return keys;
 }*/

}
