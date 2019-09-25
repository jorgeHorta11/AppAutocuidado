import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {

  }
  TologinPage(){
    this.router.navigate(['login']);
  }

}
