package com.ge.imaging.authentication;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	@RequestMapping("/")
	public Message index() {
		return new Message("Greetings from Spring Boot!");
	}

}
