import { Injectable } from '@angular/core';

@Injectable()
export class UserContextService {
	private accessToken : string = "";

  	constructor() { }

  	isContextReady() : boolean {
  		return this.accessToken.length > 0;
  	}

  	setAccessToken(accessToken : string) {
  		this.accessToken = accessToken;
  	}

    getAccessToken() : string {
        return this.accessToken;
    }
}
