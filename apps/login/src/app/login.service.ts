import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

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
		private messageService: MessageService) { }

	onLogin(name: string, password: string) {

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
			//this.router.navigate(['/show_alunos'])
		}, (err: HttpErrorResponse) => {
			this.messageService.add("Login failed");
		});
	}
}
