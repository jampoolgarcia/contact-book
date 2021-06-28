import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../../../model/contact';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [
  ]
})
export class ContactFormComponent {


  public contact!: Contact;

  constructor(
    private _service: ContactService,
    private _router: Router
    ) { 
      this.buildingDefaultData();
  }

  buildingDefaultData(){
    this.contact =  new Contact();
      
  }

  onSubmit(){
    if (this._service.addContact(this.contact)) {
      Swal.fire({
        icon: 'success',
        title: 'Your contact has been saved',
        showConfirmButton: true,
        confirmButtonColor: '#212529',
        timer: 2000
      }).then(res => {
        this._router.navigate(['list']);
      })
    }
          
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
