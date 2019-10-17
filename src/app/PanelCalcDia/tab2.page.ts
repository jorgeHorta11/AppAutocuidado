import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CAA } from '../interfaces/caa';
import { CAAService } from '../services/caaService';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  caa: CAA = new CAA();
  datos;
  constructor(private router: Router,
    private caaService : CAAService
    ) { 
      this.datos= [1,2,3,4,5]
     }

    pruebaCaa(){
    let id = localStorage.getItem("id"); 
    let idNumber = parseInt(id);
    console.log("Este es el id", id);
    
    let respuestas : Array<number>;

      const caa = { 
      documentNumber: idNumber,
      respuestas = [this.caa.answer1, this.caa.answer2, 
        this.caa.answer3,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer3,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer4,
        this.caa.answer4
      ]
      };
      
      console.log(caa);
      this.caaService.createCAA(caa)
      .subscribe((newCAA) => {
      console.log(newCAA);
    });
    
    this.router.navigate(['panel-cal-dia2']);
    }

    

  ToDiagnosticoPage(){
    this.router.navigate(['panel-cal-dia2']);
  }

}
