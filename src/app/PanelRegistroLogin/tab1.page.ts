import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from '../services/register.service';
import { Register } from '../interfaces/register';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {  

  register: Register = new Register();
   constructor(private router: Router,
    private registerService: RegisterService
    ) {

  }

  getRegister() {
    this.registerService.getRegister(11219391232)
    .subscribe(register => {
      console.log(register);
    });
  }  
  
  getAllRegisters() {
    this.registerService.getAllRegisters()
    .subscribe(registers => {
      console.log(registers);
    });
  }
   createRegister() {    
    const register = {
      documentNumber: this.register.documentNumber,
      userName: this.register.userName,
      lastName: this.register.lastName,
      password: this.register.password,
      userRol: "paciente"       
    };

    this.registerService.createRegister(register)
    .subscribe((newRegister) => {
      console.log(newRegister);
    });
    
    localStorage.setItem("id",this.register.documentNumber.toString());
  }
  
  ToDiagnosticoPage(){
    this.router.navigate(['panel-cal-dia2']);
  }
  
}


