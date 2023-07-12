import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../types/User';
import { GlobalLoaderService } from 'src/app/core/global-loading/global-loader.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  userData: User = {
    'id': 0,
    'name': ''
  };
  
  constructor(private activatedRoute: ActivatedRoute,
    private globalLoadingService: GlobalLoaderService) { }

  ngOnInit(): void {
    this.userData = this.activatedRoute.snapshot.data['user'];
    console.log(this.userData);
    this.globalLoadingService.hideLoader();
  }

}
