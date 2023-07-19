import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appIsEmailValid } from 'src/app/shared/validators/app-email-validator-fn';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';
import { matchPassValidator } from 'src/app/shared/validators/match-pass-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appIsEmailValid(DEFAULT_EMAIL_DOMAINS)]],
    tel: [''],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      rePassword: ['', [Validators.required]],
    },
    {
      validators: [matchPassValidator('password', 'rePassword')]
    })
  })

  constructor(private fb: FormBuilder) { }

  register():void {
    console.log(this.form.value);    
  }
}
