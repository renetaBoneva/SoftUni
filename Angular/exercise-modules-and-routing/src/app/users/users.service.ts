import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './types/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
