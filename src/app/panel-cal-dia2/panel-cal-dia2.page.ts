import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Framingham } from '../interfaces/framingham';

@Component({
  selector: 'app-panel-cal-dia2',
  templateUrl: './panel-cal-dia2.page.html',
  styleUrls: ['./panel-cal-dia2.page.scss'],
})
export class PanelCalDia2Page {

  register: Framingham = new Framingham();

  constructor() { }

  
}
