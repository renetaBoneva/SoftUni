import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';



@NgModule({
  declarations: [
    LoadingComponent,
    EmailValidatorDirective,
    SlicePipe,
    ElapsedTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    EmailValidatorDirective,
    SlicePipe,
    ElapsedTimePipe
  ]
})
export class SharedModule { }
