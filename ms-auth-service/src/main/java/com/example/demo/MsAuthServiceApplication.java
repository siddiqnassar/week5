package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@EnableEurekaClient
@RestController
@SpringBootApplication
public class MsAuthServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsAuthServiceApplication.class, args);
	}
	@RequestMapping
	public String invoke()
	{
		
		return "hello  i am from auth service";
	}
}
