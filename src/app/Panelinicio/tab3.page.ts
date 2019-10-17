import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../services/home.service';
import { Home } from '../interfaces/home';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router,
              private homeService: HomeService
  ) {}

  getHome() {
    this.homeService.getHome(1123638381)
    .subscribe(homes => {
      console.log(homes);           
    });
  }

  ToHistoriaPage(){
    this.router.navigate(['panel-cal-rcv']);
  }

}
