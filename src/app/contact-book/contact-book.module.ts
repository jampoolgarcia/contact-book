// angular core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { CapitalizePipe } from '../pipes/capitalize.pipe';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    CapitalizePipe,
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
