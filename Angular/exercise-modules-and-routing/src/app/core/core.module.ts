import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { GlobalLoadingComponent } from './global-loading/global-loading.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavigationComponent,
    GlobalLoadingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavigationComponent,
    GlobalLoadingComponent
  ]
})
export class CoreModule { }
