import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  appEmailDomains: string[] = DEFAULT_EMAIL_DOMAINS;

  constructor( 
    private userService: UserService,
    private router: Router,
  ) { }

  login(form: NgForm): void {
    //TODO: handle login data
    if(form.invalid) {
      return;
    }

    console.log(form);
    this.userService.login();
    this.router.navigate(['/']);
  }
}
