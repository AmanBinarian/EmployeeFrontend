import { Routes } from '@angular/router';
import { CredentialInputComponent } from './credential-input/credential-input.component';
import { CredentialDetailComponent } from './credential-detail/credential-detail.component';
import { HomeComponentComponent } from './home-component/home-component.component';


export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'input', component: CredentialInputComponent },
    { path: 'details', component: CredentialDetailComponent }
];
