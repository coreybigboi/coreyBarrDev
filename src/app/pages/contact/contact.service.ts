import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendMessage(name: string, email: string, message: string){
    console.log(name + email + message);
  }
}
