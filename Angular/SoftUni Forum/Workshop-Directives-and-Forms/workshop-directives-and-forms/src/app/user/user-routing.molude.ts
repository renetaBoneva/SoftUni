import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { AuthDeactivate } from '../core/guards/auth.deactivate';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthDeactivate],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthDeactivate],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
