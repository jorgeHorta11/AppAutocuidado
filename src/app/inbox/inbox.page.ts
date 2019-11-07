import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messageService';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
    datos: any =  [Message]; 

  constructor( private messageService: MessageService) { }

  loadInbox(){
    let id = localStorage.getItem("id");
    let idNumber = parseInt(id);
    console.log("id inbox", idNumber);

    this.messageService.getMessage(idNumber)
    .subscribe(message => {
      console.log(message);
      this.datos = message;
    })
  }
  
  ngOnInit() {
    this.loadInbox();
  }

}
