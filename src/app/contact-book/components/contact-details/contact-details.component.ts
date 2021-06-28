import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent {

  public contact: Contact = new Contact();

  constructor() { }

}
