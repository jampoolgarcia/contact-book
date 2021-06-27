import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-book/pages/contact-form/contact-form.component';
import { ContactsComponent } from './contact-book/pages/contacts/contacts.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
    },
    {
        path: 'form',
        component: ContactFormComponent,
    },
    {
        path: 'list',
        component: ContactsComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'list',
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}