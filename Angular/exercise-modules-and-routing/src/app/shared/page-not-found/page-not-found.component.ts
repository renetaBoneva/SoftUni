import { Component, OnInit } from '@angular/core';
import { GlobalLoaderService } from 'src/app/core/global-loading/global-loader.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  constructor(private globalLoadingService: GlobalLoaderService) { }

  ngOnInit(): void {
    this.globalLoadingService.hideLoader()
  }
}
