import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Message } from './../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private api = 'https://back-selfcareapp.herokuapp.com/selfcare';

  constructor(
    private http: HttpClient
  ) { }


  getMessage(documentNumber: number) {
    const path = `${this.api}/inboxMobile/${documentNumber}`;
    return this.http.get<Message>(path);
  }
  
  createMessage(message: Message) {
    const path = `${this.api}/email`;
    return this.http.post(path, message);
  }
}