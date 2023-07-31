import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{
  err$ = this.errService.error$$.asObservable();  

  errMsg = '';

  constructor(private errService: ErrorService) {}

  ngOnInit(): void {
    this.err$.subscribe({
      next: (err: any) => {
        this.errMsg = err.message
      },
    })
  }

}
