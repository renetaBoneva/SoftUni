import { Component } from '@angular/core';
import { GlobalLoaderService } from './global-loader.service';

@Component({
  selector: 'app-global-loading',
  templateUrl: './global-loading.component.html',
  styleUrls: ['./global-loading.component.css']
})
export class GlobalLoadingComponent {
  constructor(public globalLoadingService: GlobalLoaderService) {  }
}
