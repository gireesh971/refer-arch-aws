import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Router} from "@angular/router";

import { MessageService } from './message.service';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class LoginService {
	private loginUrl = "/api/authentication/login";

	constructor(
		private http: HttpClient,
		private messageService: MessageService,
		private router: Router) { }

	onLogin(name: string, password: string, callback: string) {

		this.http.post(this.loginUrl,
			{
				name: name,
				password: password 
			}, 
			{
				observe: 'response',
				headers: new HttpHeaders({
					'Content-Type':  'application/json',
				})
			})
		.subscribe(httpResponse => {
			let jwtToken = httpResponse.headers.get("authorization");
			this.messageService.add("Successully logeed in with - token: " + jwtToken);
			this.messageService.add("Please wait for redirect to : " + jwtToken);
			console.log("service got call bacl URL: " + callback);
			this.router.navigate(["success"]);
			console.log("redirecting to call bacl URL: " + callback);
			window.location.href = callback;
		}, (err: HttpErrorResponse) => {
			this.messageService.add("Login failed");
		});
	}
}
