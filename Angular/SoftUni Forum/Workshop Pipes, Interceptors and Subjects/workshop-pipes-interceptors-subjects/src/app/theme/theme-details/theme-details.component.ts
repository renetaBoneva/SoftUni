import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/Theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent implements OnInit{
  theme: Theme | undefined;
  isLiked: boolean = false;
  isSubscribed: boolean = false;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.fetchThemeDetails();
  }

  fetchThemeDetails() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getThemeDetails(id).subscribe(themeData => {
      this.theme = themeData;
      console.log(this.theme);
      
    });
  }

  get isLogged() {
    return this.userService.isLogged;
  }

  like(postID: string):void {
    // TODO: handle data
    this.isLiked = true;
  }

  unlike(postID: string):void {
    // TODO: handle data
    this.isLiked = false;
  }

  subscribe(themeID: string):void {
    // TODO: handle data
    this.isSubscribed = true;
  }

  unsubscribe(themeID: string):void {
    // TODO: handle data
    this.isSubscribed = false;
  }
}
