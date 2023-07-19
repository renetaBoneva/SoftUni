import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/Post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})

export class PostsListComponent implements OnInit {
  postsList: Post[] = [];
  isPosts: boolean = false;
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe({
      next: (posts) => {
        this.postsList = posts;
        this.isPosts = this.postsList.length > 0;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err.message}`);
      }
    })
  }
}
