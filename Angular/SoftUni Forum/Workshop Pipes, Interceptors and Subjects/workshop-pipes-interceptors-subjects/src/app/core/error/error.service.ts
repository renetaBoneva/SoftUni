import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$$ = new BehaviorSubject(null);

  constructor() { }

  setErr(err: any) {
    this.error$$.next(err);
  }
}
