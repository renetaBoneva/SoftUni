import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authenticating',
  templateUrl: './authenticating.component.html',
  styleUrls: ['./authenticating.component.css']
})
export class AuthenticatingComponent implements OnInit{
  isAuthenticated = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: () => {this.isAuthenticated = false},
      error: () => {this.isAuthenticated = false},
      complete: () => {this.isAuthenticated = false},
    })
  }
}
