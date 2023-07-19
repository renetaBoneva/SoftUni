import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/Theme';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})

export class ThemesListComponent implements OnInit {
  themesList: Theme[] = [];
  isThemes: boolean = false;
  isLoading: boolean = true;
  isSubscribed: boolean = false;

  constructor(
    private userService: UserService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themesList = themes;
        this.isThemes = this.themesList.length > 0;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err.message}`);
      }
    })
  }

  get isLogged() {
    return this.userService.isLogged;
  }

  subscribe(themeID: string): void {
    // TODO: handle data
    this.isSubscribed = true;
  }

  unsubscribe(themeID: string): void {
    // TODO: handle data
    this.isSubscribed = false;
  }
}
