import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // contact record list
  private recordList: Contact[] = [];

  constructor(private _http: HttpClient) {

  }

   /**
   * returns the contact list
   */
  get contactList(){
      return this.recordList;
  }

   /**
   * Add a contact to the list
   * @param contact contact to add
   */
  addContact(contact: Contact): boolean {
    this.recordList.push(contact);
    return true;
  }

  getDefaultData(){
    return this._http.get<Contact[]>(`assets/json/contact.json`)
      .pipe(
        map(res => {
          const records = res.map(contact => {
            return new Contact(
              contact.firstName, 
              contact.lastName,
              contact.sex,
              contact.company,
              contact.phone,
              contact.email,
              contact.description)
            });
              
          this.recordList = records;
          return records;
        })
      )
  }

}
