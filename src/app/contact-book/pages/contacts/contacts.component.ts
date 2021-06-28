import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ContactDetailsComponent } from '../../components/contact-details/contact-details.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  public contactList: Contact[] = [];

  @ViewChild('details') details!: ContactDetailsComponent;

  constructor(private _service: ContactService) { }

  ngOnInit(): void {
    if(this._service.contactList.length === 0){
      this._service.getDefaultData()  
      .subscribe(res => {
        this.contactList = res;
      });
    }else{
      this.contactList = this._service.contactList;
    }
     
  }

  seeDetails(index: number){
    this.details.contact = this.contactList[index];
  }

  

}
