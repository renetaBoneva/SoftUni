import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appIsEmailValid } from 'src/app/shared/validators/app-email-validator-fn';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';
import { UserService } from '../user.service';

interface ProfileInfo {
  username?: string | null | undefined,
  email?: string | null | undefined,
  tel?: string | null | undefined,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appIsEmailValid(DEFAULT_EMAIL_DOMAINS)]],
    tel: [''],
  })

  userInfo: ProfileInfo = {
    username: '',
    email: '',
    tel: '',
  };

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    this.userInfo = {
      username,
      email,
      tel
    }

    this.form.setValue({
      username,
      email,
      tel
    });
  }

  handleProfileChange() {
    if (this.form.invalid) {
      return;
    }
    this.userInfo = { ...this.form.value };
    const { username, email, tel } = this.userInfo;

    this.userService
      .updateProfile(username!, email!, tel!)
      .subscribe({
        next: () => { this.changeMode() },
      })
  }

  changeMode(): void {
    this.isEditMode = !this.isEditMode;
  }
}
