import { Injectable } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    }
    catch (err) {
      this.user = undefined;
    }
  }

  get isLogged() {
    return !!this.user;
  }

  login(): void {
    this.user = {
      email: 'john.doe@abv.bg',
      password: '123456',
      firstName: 'John',
      lastName: 'Doe',
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    this.user = undefined;
  }
}
