import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CAA } from '../interfaces/caa';
import { CAAService } from '../services/caaService';

@Component({
  selector: 'caa',
  templateUrl: 'caa.page.html',
  styleUrls: ['caa.page.scss']
})
export class CAAPage {

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
    

      const caa = { 
      documentNumber: idNumber,
      answer1: this.caa.answer1,
      answer2: this.caa.answer2,
      answer3: this.caa.answer3,
      answer4: this.caa.answer4,
      answer5: this.caa.answer5,
      answer6: this.caa.answer6,
      answer7: this.caa.answer7,
      answer8: this.caa.answer8,
      answer9: this.caa.answer9,
      answer10: this.caa.answer10,
      answer11: this.caa.answer11,
      answer12: this.caa.answer12,
      answer13: this.caa.answer13,
      answer14: this.caa.answer14,
      answer15: this.caa.answer15,
      answer16: this.caa.answer16,
      answer17: this.caa.answer17,  
      };

      console.log(caa);
      this.caaService.createCAA(caa)
      .subscribe((newCAA) => {
      console.log(newCAA);
    });
    
    this.router.navigate(['/tabs/framingham']);
    }

    ToDiagnosticoPage(){
    this.router.navigate(['framingham']);
  }

}
