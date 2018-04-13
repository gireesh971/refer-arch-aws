import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
	private routeSubscription: Subscription;
	callBack: string = "#"

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.routeSubscription = this.route.queryParams.subscribe(
         (queryParam: any) => {
         	this.callBack = queryParam['callback'];
         	console.log("callback url on success is: " + this.callBack);
         }
     );
  }

	ngOnDestroy() {
		this.routeSubscription.unsubscribe();
	} 
}
