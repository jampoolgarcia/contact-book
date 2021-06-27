// angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// routing
import { AppRoutingModule } from './app.routing';

// root component
import { AppComponent } from './app.component';

// modules
import { ContactBookModule } from './contact-book/contact-book.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ContactBookModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
