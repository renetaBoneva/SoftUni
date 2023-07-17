import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightOnMouseDirective } from './highlight-on-mouse.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyStructuralDirectiveDirective } from './home/my-structural-directive.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightOnMouseDirective,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyRouterLinkDirective,
    MyStructuralDirectiveDirective,
    MaxCountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Template driven forms
    ReactiveFormsModule, // Reactive forms approach
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
