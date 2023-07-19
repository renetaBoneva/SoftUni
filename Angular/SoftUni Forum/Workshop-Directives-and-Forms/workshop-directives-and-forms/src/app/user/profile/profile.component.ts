import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appIsEmailValid } from 'src/app/shared/validators/app-email-validator-fn';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';

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

export class ProfileComponent {
  isEditMode: boolean = false;
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appIsEmailValid(DEFAULT_EMAIL_DOMAINS)]],
    tel: [''],
  })

  userInfo: ProfileInfo | undefined = {
    username: 'Johny',
    email: 'john.doe@gmail.com',
    tel: '885 888 888',
  };

  constructor(private fb: FormBuilder) { }

  handleProfileChange() {

    this.userInfo = { ...this.form.value }
    this.isEditMode = !this.isEditMode;
  }

  changeMode(): void {
    this.isEditMode = !this.isEditMode;
    this.form.reset();
  }
}
