import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {

  }
  ToDiagnosticoPage(){
    this.router.navigate(['panel-cal-dia2']);
  }
  public estado = [
    { val: 'Casado', isChecked: true },
    { val: 'Soltero', isChecked: false },
    { val: 'Viudo', isChecked: false },
    { val: 'Unión Libre', isChecked: false },
    { val: 'Separado/divorciado', isChecked: false }
  ];

  public ocupacion = [
    { val: 'Ama de Casa', isChecked: true },
    { val: 'Comerciante', isChecked: false },
    { val: 'Empleado', isChecked: false },
    { val: 'Jubilado', isChecked: false }

  ];

  public escolaridad = [
    { val: 'Ninguna', isChecked: true },
    { val: 'Primaria', isChecked: false },
    { val: 'Bachiller', isChecked: false },
    { val: 'Técnico', isChecked: false },
    { val: 'Universitaria', isChecked: false },
    { val: 'Postgrado', isChecked: false }

  ];

  public vive = [
    { val: 'Solo', isChecked: true },
    { val: 'Pareja', isChecked: false },
    { val: 'Hijo/hija', isChecked: false },
    { val: 'Padre/madre', isChecked: false }

  ];

  
  public cuidador = [
    { val: 'Cónyuge', isChecked: true },
    { val: 'Hijo/hija', isChecked: false },
    { val: 'Padre/madre', isChecked: false },
    { val: 'Otro familiar', isChecked: false }

  ];

}
