import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewThemeComponent,
    ThemeDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemesRoutingModule,
    FormsModule
  ]
})
export class ThemeModule { }
