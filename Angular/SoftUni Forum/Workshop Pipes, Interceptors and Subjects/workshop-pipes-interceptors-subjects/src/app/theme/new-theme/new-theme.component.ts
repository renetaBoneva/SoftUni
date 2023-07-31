import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {

  constructor(
    private apiService: ApiService,
    private router: Router,
    ) { }

  createTheme(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { postText, themeName } = form.value;
    this.apiService.createTheme(postText, themeName).subscribe({
      next: () => {this.router.navigate(['/themes'])}
    })
  }

  resetForm(form: NgForm): void {
    form.reset();
  }
}
