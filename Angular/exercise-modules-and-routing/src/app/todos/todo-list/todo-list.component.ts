import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { GlobalLoaderService } from 'src/app/core/global-loading/global-loader.service';
import { TodosService } from '../todos.service';
import { Todo } from '../types/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: Todo[] = []

  constructor(private globalLoadingService: GlobalLoaderService,
    private todosService: TodosService) { }

  ngOnInit(): void {
    this.globalLoadingService.showLoader();
    this.todosService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos.slice(1, 20);
        this.globalLoadingService.hideLoader();
      },
      error: (err) => {
        console.log(`Error: ${err.message}`);        
        this.globalLoadingService.hideLoader();
      }
    })
  }

  changeComplete(i: number){
    this.todos[i].completed = !this.todos[i].completed;
  }
}
