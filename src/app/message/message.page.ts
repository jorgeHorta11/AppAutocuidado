import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messageService';
import { Message } from '../interfaces/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  message: Message = new Message();
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    
  }
  sendMessage(){
    let id = localStorage.getItem("id"); 
    let idNumber = parseInt(id);
    console.log("Este es el dato", id);

    const message = {
      documentNumber: idNumber,
      tituloEmail: this.message.tituloEmail,
      cuerpoEmail: this.message.cuerpoEmail,
      from: "Mobile"       
    };

    this.messageService.createMessage(message)
    .subscribe((newMessage) => {
      console.log(newMessage);
    });
    alert('Mensaje enviado con éxito!' )
  }

}
