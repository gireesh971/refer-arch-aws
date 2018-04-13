import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { USERS } from './mock-users';
import { MessageService } from './message.service';

@Injectable()
export class UserService {
	private usersUrl = '/api/authentication/users';

  constructor(
  	private http: HttpClient,
  	private messageService: MessageService) { }

  getUsers() : Observable<User[]> {
  	this.messageService.add('USerService: fetched users');
  	return this.http.get<User[]>(this.usersUrl);
  }
  	private log(message: string) {
  		this.messageService.add('USerService: ' + message);
	}
}
