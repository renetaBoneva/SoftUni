import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubj$$ = new BehaviorSubject<Object | null>(null);
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  userObs$ = this.userSubj$$.asObservable();
  isLoadingUsers$ = this.isLoading$$.asObservable();

  constructor(private http: HttpClient) { }

  loadUsers(): void {
    this.userSubj$$.next(null);
    this.isLoading$$.next(true);

    this.http.get('/api/users').subscribe({
      next: (users) => {
        this.userSubj$$.next(users)
        this.isLoading$$.next(false)
      }
    })
  }
}
