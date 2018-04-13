import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
	messages: string[] = [];
	
	constructor() { }

	add(message: string) {
		this.messages.push(message);
		setTimeout(() => {
			this.clear();
		}, 5000);
    }

	clear() {
		this.messages = [];
	}
}
