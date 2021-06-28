import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactI } from '../interface/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactList: ContactI[] = [];

  constructor(private _http: HttpClient) {

  }

  addContact(contact: ContactI): boolean {
    this.contactList.push(contact);
    console.log(this.contactList);
    return true;
  }

}
