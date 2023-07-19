import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { appIsEmailValid } from './app-email-validator-fn';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator, OnChanges {
  @Input() appEmailValidator: string[] = [];

  constructor() { }

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentEmailChanges = changes['appEmailValidator'];
    if (currentEmailChanges) {
      this.validator = appIsEmailValid(currentEmailChanges.currentValue);
    }
  }
}
