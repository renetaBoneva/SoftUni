import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm | undefined;

  email: string = '';  

  //we can reach login form by function params or by @ViewChild
  // submitHandler(form: NgForm): void {
  submitHandler(): void {
    if(!this.loginForm) return;

    const form = this.loginForm;
    if (form.invalid) {
      return;
    }

    const values: { email: string, password: string } = form.value;
    form.setValue({ email: '', password: '' })
  }


  resetForm(form: NgForm): void {
    form.reset();
  }
}
