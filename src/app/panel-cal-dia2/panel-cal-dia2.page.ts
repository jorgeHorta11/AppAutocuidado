import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-cal-dia2',
  templateUrl: './panel-cal-dia2.page.html',
  styleUrls: ['./panel-cal-dia2.page.scss'],
})
export class PanelCalDia2Page {

  constructor(private router: Router) { }

  framingham() {
    this.router.navigate(['panel-cal-rcv'])
  }

}
