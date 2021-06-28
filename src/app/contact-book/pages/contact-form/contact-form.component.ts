import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  getErrorMsg(control: FormControl): string{

    if(control.errors?.required){
      return 'The field is required.'
    }else if(control.errors?.minlength){
      return `The field requires minimum ${control.errors?.minlength.requiredLength} characters.`;
    }else if(control.errors?.pattern){
      return 'The field is not in the correct format.'
    }

    return '';
  }

}
