import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../services/home.service';
import { Home } from '../interfaces/home';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  datos = new Home;

  color= this.datos.color;
    constructor(private router: Router,
              private homeService: HomeService
  ) {}


    ToHistoriaPage(){
    this.router.navigate(['framingham']);
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

  getColor(color){
    switch(color){
      case "AMARILLO":
        return '#FFEB2C'
      case "NARANJA":
          return '#EBB710'
      case "ROJO":
          return '#FF3925'
      case "VERDE":
         return '#2CFF1F'
    }
  }

}
