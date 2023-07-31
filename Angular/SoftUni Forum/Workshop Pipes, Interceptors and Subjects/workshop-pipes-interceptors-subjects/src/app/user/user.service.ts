import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  user$$ = new BehaviorSubject<User | undefined>(undefined);

  user$ = this.user$$.asObservable()

  user: User | undefined;
  USER_KEY = '[user]';
  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe({
      next: (user) => { this.user = user },
    })
  }

  get isLogged() {
    return !!this.user;
  }

  login(email: string, password: string) {
    return this.http
      .post<User>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    email: string,
    username: string,
    password: string,
    rePassword: string,
    tel?: string) {

    return this.http
      .post<User>('/api/register', { email, username, password, rePassword, tel })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getProfile() {
    return this.http
      .get<User>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(
    username: string,
    email: string,
    tel?: string) {
    return this.http
      .put<User>('/api/users/profile', {username, email, tel})
      .pipe(tap((user) => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
