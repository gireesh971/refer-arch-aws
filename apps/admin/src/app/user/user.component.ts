import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { User } from '../user';
import { UserService } from '../user.service';
import { UserContextService } from '../user-context.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	users: User[];

	selectedUser: User;
	private routeSubscription: Subscription;
	private accessToken: string = "";

	constructor(
		private userService: UserService,
		private userCotextService: UserContextService,
		private route: ActivatedRoute) { }

	getUsers(): void {
		this.userService.getUsers()
    		.subscribe(users => this.users = users);
	}

	onSelect(user: User): void {
		this.selectedUser = user;
	}
	
	ngOnInit() {
		this.routeSubscription = this.route.queryParams.subscribe(
             (queryParam: any) => {
             	if (! this.userCotextService.isContextReady()) {
	             	let jwtToken = queryParam['access_token'];
	             	console.log("## UserComponent received Access token as: " + jwtToken);
	             	if (jwtToken && jwtToken.length > 0) {
	             		this.accessToken = jwtToken;
	             		this.userCotextService.setAccessToken(this.accessToken);
	             	}
	             	if (this.accessToken == "") {
	             		console.log("## UserComponent - redirecting - no access token: ");
	             		window.location.href = "/apps/login/?callback=/apps/admin/users";
	             	} else {
	             		console.log("## continueing processing with access token: " + this.accessToken);
	             	}
             	}
             }
         );
		this.getUsers();
	}
}
