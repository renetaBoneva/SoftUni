import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';



@NgModule({
  declarations: [
    LoadingComponent,
    EmailValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [LoadingComponent, EmailValidatorDirective]
})
export class SharedModule { }
