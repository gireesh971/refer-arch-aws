import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	users: User[];

	selectedUser: User;

	constructor(private userService: UserService) { }

	getUsers(): void {
		this.userService.getUsers()
    		.subscribe(users => this.users = users);
	}

	onSelect(user: User): void {
		this.selectedUser = user;
	}
	
	ngOnInit() {
		this.getUsers();
	}
}
