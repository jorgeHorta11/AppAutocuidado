import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../services/home.service';
import { Home } from '../interfaces/home';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  datos = new Home;
    constructor(private router: Router,
              private homeService: HomeService
  ) {}

    ToHistoriaPage(){
    this.router.navigate(['panel-cal-rcv']);
  }
  ngOnInit(){
    let id = localStorage.getItem("id"); 
    let idNumber = parseInt(id);
    console.log("Este es el id", id);
    
    this.homeService.getHome(idNumber)
    .subscribe(home => {
      console.log(home);      
      this.datos = home;
    });
  }

}
