import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {
  isLoadig: boolean = true;

  constructor() { }

  showLoader() {
    this.isLoadig = true;
  }

  hideLoader() {
    this.isLoadig = false;
  }
}
