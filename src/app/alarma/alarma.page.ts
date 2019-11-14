import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Alarma } from '../interfaces/alarma';
import { HowLongOption } from '../interfaces/howLongOption';
import { AlarmaService } from '../services/alarmaService';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.page.html',
  styleUrls: ['./alarma.page.scss']
})
export class AlarmaPage {
  select: HTMLSelectElement;
  alarma: Alarma = new Alarma();
  //howLongOption: HowLongOption = new HowLongOption();

  defaultSelectedRadio = '0';
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup: any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem: any;
  validar1: string;
  validar2: string;
  validar3: string;
  validar4: string;
  validar5: string;
  validar6: string;
  validar7: string;
  validar8: string;
  validar9: string;
  constructor(private alarmaService: AlarmaService) {}

  radio_list = [
    {
      id: '1',
      name: 'radio_list',
      value: '1',
      text: 'Si',
      checked: false,
      color: 'success'
    },
    {
      id: '2',
      name: 'radio_list',
      value: '0',
      text: 'No',
      checked: false,
      color: 'danger'
    }
  ];
  Option1: any;

  radioGroupChange(event) {
    this.selectedRadioGroup = event.detail;
  }
  // TODO: Valida cada opción elegida y muestra o esconde el contenido de la segunda pregunta.
  radioSelect1(event) {
    console.log('1 Respuesta: ', event.detail.value);
    this.selectedRadioItem = event.detail;
    this.validar1 = event.detail.value;
    if (this.validar1 == '0') {
      document.getElementById('ocultar1').style.display = 'none';
    } else {
      document.getElementById('ocultar1').style.display = 'block';
    }
  }
  radioSelect2(event) {
    console.log('2 Respuesta: ', event.detail.value);
    this.selectedRadioItem = event.detail;
    this.validar2 = event.detail.value;
    // tslint:disable-next-line: triple-equals
    if (this.validar2 == '0') {
      document.getElementById('ocultar2').style.display = 'none';
    } else {
      document.getElementById('ocultar2').style.display = 'block';
    }
  }
  radioSelect3(event) {
    console.log('3 Respuesta: ', event.detail.value);
    this.selectedRadioItem = event.detail;
    this.validar3 = event.detail.value;
    if (this.validar3 == '0') {
      document.getElementById('ocultar3').style.display = 'none';
    } else {
      document.getElementById('ocultar3').style.display = 'block';
    }
  }
  radioSelect4(event) {
    console.log('4 Respuesta: ', event.detail.value);
    this.selectedRadioItem = event.detail;
    this.validar4 = event.detail.value;
    if (this.validar4 == '0') {
      document.getElementById('ocultar4').style.display = 'none';
    } else {
      document.getElementById('ocultar4').style.display = 'block';
    }
  }
  radioSelect5(event) {
    console.log('5 Respuesta: ', event.detail.value);
    this.selectedRadioItem = event.detail;
    this.validar5 = event.detail.value;
  }
  radioSelect6(event) {
    console.log('6 Respuesta: ', event.detail.value);
    this.selectedRadioItem = event.detail;
    this.validar6 = event.detail.value;
  }
  radioSelect7(event) {
    console.log('7 Respuesta: ', event.detail.value);
    this.selectedRadioItem = event.detail;
    this.validar7 = event.detail.value;
    if (this.validar7 == '0') {
      document.getElementById('ocultar5').style.display = 'none';
    } else {
      document.getElementById('ocultar5').style.display = 'block';
    }
  }
  radioSelect8(event) {
    console.log('8 Respuesta: ', event.detail.value);
    this.selectedRadioItem = event.detail;
    this.validar8 = event.detail.value;
    if (this.validar8 == '0') {
      document.getElementById('ocultar6').style.display = 'none';
    } else {
      document.getElementById('ocultar6').style.display = 'block';
    }
  }
  radioSelect9(event) {
    console.log('9 Respuesta: ', event.detail.value);
    this.selectedRadioItem = event.detail;
    this.validar9 = event.detail.value;
    if (this.validar9 == '0') {
      document.getElementById('ocultar7').style.display = 'none';
    } else {
      document.getElementById('ocultar7').style.display = 'block';
    }
  }

  createAlarma() {
    const id = localStorage.getItem('id');
    const idNumber = parseInt(id);

    this.alarma = {
      documentNumber: idNumber,
      preguntaList: [
        {
          question: '1',
          optionYesNo: this.validar1,
          howLongOption: 'Menos de 1 hora'
        },
        {
          question: '2',
          optionYesNo: this.validar2,
          howLongOption: 'No sé'
        },
        {
          question: '3',
          optionYesNo: this.validar3,
          howLongOption: 'Menos de 3 horas'
        },
        {
          question: '4',
          optionYesNo: this.validar4,
          howLongOption: 'Días'
        },
        {
          question: '5',
          optionYesNo: this.validar5,
          howLongOption: 'N/A'
        },
        {
          question: '6',
          optionYesNo: this.validar6,
          howLongOption: 'N/A'
        },
        {
          question: '7',
          optionYesNo: this.validar7,
          howLongOption: 'N/A'
        },
        {
          question: '8',
          optionYesNo: this.validar8,
          howLongOption: 'N/A'
        },
        {
          question: '9',
          optionYesNo: this.validar9,
          howLongOption: 'Días'
        }
      ]
    };

    console.log(this.alarma.preguntaList);

    this.alarmaService.createAlarma(this.alarma).subscribe(newAlarma => {
      console.log(newAlarma);
    });
  }
}
