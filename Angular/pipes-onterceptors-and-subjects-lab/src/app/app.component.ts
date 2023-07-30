import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipes-onterceptors-and-subjects-lab';
  user: User = { name: 'Lily', age: 12, list: [1, 2, 6, 3, 4, 7] }
  usersObs$ = this.userService.userObs$;
  isLoadingUsers$ = this.userService.isLoadingUsers$;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    // this.userService.loadUsers().subscribe({
    //   next: console.log,    
    //   error: err => console.log('Error from Observable: ', err.message)        
    // });
  }

  sum(a: number, b: number) {
    return a + b;
  }

  reloadUsers(){
    this.userService.loadUsers()
  }

  p = new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved')
    }, 2000)
  })

  time$ = interval(1000).pipe(map(() => new Date()));
}

export interface User {
  name: string,
  age: number,
  list: number[]
}