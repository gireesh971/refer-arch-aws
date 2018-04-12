import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { LoginService } from './login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
