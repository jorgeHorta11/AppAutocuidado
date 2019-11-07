import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Framingham } from '../interfaces/framingham';
import { FraminghamService } from '../services/framinghamService';

@Component({
  selector: 'framingham',
  templateUrl: './framingham.page.html',
  styleUrls: ['./framingham.page.scss'],
})
export class FraminghamClass {

  framingham: Framingham = new Framingham();

  constructor(
    private router: Router,
    private framinghamService: FraminghamService
  ) { }

  createFramingham() {     
    let id = localStorage.getItem("id"); 
    let numberId = parseInt(id);
    console.log("Este es el id", id);

    const framingham = {      
      documentNumber: numberId,   
      userGender: this.framingham.userGender,
      userAge: this.framingham.userAge,
      colesterol: this.framingham.colesterol,
      fuma: this.framingham.fuma,
      hdl: this.framingham.hdl,
      paSistolica: this.framingham.paSistolica
    };
    console.log(framingham);
    this.framinghamService.createFramingham(framingham)
    .subscribe((newFramingham) => {
      console.log(newFramingham);
    });
    
    this.router.navigate(['tabs/home']);
  }
  
}
