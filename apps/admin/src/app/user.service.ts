import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { USERS } from './mock-users';
import { MessageService } from './message.service';
import { UserContextService } from './user-context.service';

@Injectable()
export class UserService {
	private usersUrl = '/api/authentication/users';

	constructor(
	private http: HttpClient,
	private messageService: MessageService,
	private userCotextService: UserContextService) { }

	getUsers() : Observable<User[]> {
		this.messageService.add('USerService: fetched users');
		return this.http.get<User[]>(this.usersUrl,
			{
				headers: new HttpHeaders({
					'Authorization':  'Bearer ' + this.userCotextService.getAccessToken(),
				})
			});
	}
	private log(message: string) {
		this.messageService.add('USerService: ' + message);
	}
}
