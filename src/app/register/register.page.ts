import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from '../services/register.service';
import { Register } from '../interfaces/register';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: 'Register.page.html',
  styleUrls: ['Register.page.scss']
})
export class RegisterPage {
  public fGroup: FormGroup;
  submitted = false;
  register: Register = new Register();

  checkPasswords(fGroup) {
    let pass = fGroup.controls.password.value;
    let confirmPass = fGroup.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true }
  }
   
  constructor(private router: Router, private registerService: RegisterService,
    private fBuilder: FormBuilder, ) {
    this.fGroup = this.fBuilder.group({
      'documentNumber': ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9]{10}')
      ])],
      'userName': ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(18)
      ])],
      'lastName': ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(18)
      ])],
      'password': ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ])],
      'confirmPassword': ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ])],
    })
  }

  sumitForm() {
    this.submitted = true;
    if (this.fGroup.invalid) {
      return;
    }
    console.log(this.fGroup.value)
    localStorage.setItem("id", this.fGroup.value.documentNumber.toString());
    console.log(this.fGroup.value.documentNumber)

    this.registerService.createRegister(this.fGroup.value)
      .subscribe((newRegister) => {
        console.log(newRegister);
      });

    alert('Usuario  registrado con exito!!');
    this.fGroup.reset();
  }

}


