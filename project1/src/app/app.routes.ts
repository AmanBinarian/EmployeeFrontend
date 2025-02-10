import { Routes } from '@angular/router';
import { UserFormComponent } from './AllComponents/user-form/user-form.component';
import { AppComponent } from './app.component';
import { GetUsersComponent } from './AllComponents/get-users/get-users.component';
import { UserDetailComponent } from './AllComponents/user-detail/user-detail.component';
import { UpdateUserComponent } from './AllComponents/update-user/update-user.component';

export const routes: Routes = [
    {path:'', component: AppComponent},
    {path:'users', component: GetUsersComponent},
    {path:'fetch', component: UserDetailComponent},
    {path:'add', component: UserFormComponent},
    {path:'update', component: UpdateUserComponent}
];
