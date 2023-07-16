import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewThemeComponent,
    ThemeDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemesRoutingModule
  ]
})
export class ThemeModule { }
