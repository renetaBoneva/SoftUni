import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewThemeComponent } from './new-theme/new-theme.component';
import { MainComponent } from '../main/main.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'add-theme',
    component: NewThemeComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent
      },
      {
        path: ':id',
        component: ThemeDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ThemesRoutingModule { }
