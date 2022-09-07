package net.oprup.HumanResource;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


//@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@SpringBootApplication
public class HumanResourceApplication {


	public static void main(String[] args) {

		SpringApplication.run(HumanResourceApplication.class, args);
	}



}
