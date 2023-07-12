import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './types/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
