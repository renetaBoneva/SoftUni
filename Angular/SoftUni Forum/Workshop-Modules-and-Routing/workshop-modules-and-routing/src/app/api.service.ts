import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/Theme';
import { Post } from './types/Post';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private api: string = environment.appUrl;

  constructor(private http: HttpClient) {
  }

  getThemes() {
    return this.http.get<Theme[]>(`${this.api}/themes`);
  }

  getThemeDetails(id: string) {
    return this.http.get<Theme>(`${this.api}/themes/${id}`);
  }

  getPosts(limit?: number) {
    const filter: string = limit ? `?limit=${limit}` : "";
    return this.http.get<Post[]>(`${this.api}/posts${filter}`);
  }
}
