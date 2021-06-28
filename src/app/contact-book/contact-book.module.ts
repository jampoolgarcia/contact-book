// angular core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ContactsComponent,
    ContactFormComponent,
  ]
})
export class ContactBookModule { }
