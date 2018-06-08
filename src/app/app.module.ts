import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserindexComponent } from './userindex/userindex.component';
import { AppRoutingModule } from "./core/app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserindexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }
