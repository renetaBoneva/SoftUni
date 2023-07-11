import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../types/User';
import { GlobalLoaderService } from 'src/app/core/global-loading/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService,
    private globalLoadingService: GlobalLoaderService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.globalLoadingService.showLoader();
        this.users = users;
        this.globalLoadingService.hideLoader();
      },
      error: (err) => {
        this.globalLoadingService.showLoader();
        console.log(`Error: ${err.message}`);
        this.globalLoadingService.hideLoader();
      }
    });
  }

}
