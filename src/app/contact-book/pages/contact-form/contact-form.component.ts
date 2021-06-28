import { Component, OnInit } from '@angular/core';
import { ContactI } from '../../interface/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [
  ]
})
export class ContactFormComponent implements OnInit {


  public contact: ContactI;

  constructor() { 
    this.contact = {
      firstName: '',
      lastName: '',
      sex: '',
      company: '',
      phone: '',
      email: '',
      address: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.contact);
  }

}
