import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { UserContextService } from './user-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	private title = 'Sample Application 1 - Admin Desktop';
	private routeSubscription: Subscription;

	constructor(
		private userCotextService: UserContextService,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.routeSubscription = this.route.queryParams.subscribe(
             (queryParam: any) => {
             	if (! this.userCotextService.isContextReady()) {
	             	let jwtToken = queryParam['access_token'];
	             	console.log("## AppComponent received Access token as: " + jwtToken);
	             	if (jwtToken && jwtToken.length > 0) {
	             		this.userCotextService.setAccessToken(jwtToken);
	             	}
	             	if (! this.userCotextService.isContextReady()) {
	             		console.log("## AppComponent - redirecting - no access token: ");
	             		//window.location.href = "/apps/login/?callback=/apps/admin";
	             	} else {
	             		console.log("## AppComponent continueing processing with access token: " + jwtToken);
	             	}
             	}
             }
         );		
	}


    ngOnDestroy() {
    	this.routeSubscription.unsubscribe();
    }
}
