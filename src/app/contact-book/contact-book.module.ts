// angular core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactsComponent,
    ContactFormComponent,
  ]
})
export class ContactBookModule { }
