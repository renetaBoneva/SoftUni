import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';



@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazyComponent
  ]
})
export class LazyModule { }
