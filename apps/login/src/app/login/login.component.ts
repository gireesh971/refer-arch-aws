import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private routeSubscription: Subscription;

	name: string = "admin";
	password: string = "password";
	callBack: string = "#"

	constructor(
		private loginService: LoginService,
		private route: ActivatedRoute) { }

	ngOnInit() {
         this.routeSubscription = this.route.queryParams.subscribe(
             (queryParam: any) => {
             	this.callBack = queryParam['callback'];
             	console.log("callback url is: " + this.callBack);
             }
         );
	}

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }
}
