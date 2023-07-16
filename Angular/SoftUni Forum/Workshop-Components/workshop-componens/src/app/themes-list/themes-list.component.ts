import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ThemeId } from '../types/ThemeId';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})

export class ThemesListComponent implements OnInit {
  themesList: ThemeId[] = [];
  isThemes: boolean = false;
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

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
}
