import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { UserResolver } from './user-details/user-resolver';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AuthGuard } from './user-details/user-details.guard';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/details/:id',
        resolve: { user: UserResolver },
        canActivate: [AuthGuard],
        component: UserDetailsComponent
      },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  exports: [UserListComponent]
})
export class UsersModule { }
