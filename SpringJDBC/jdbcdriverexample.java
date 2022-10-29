package com.okta.developer.tours;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.Scanner;

@SpringBootApplication
public class ToursApplication implements CommandLineRunner {
  
  // use this is a simple template for connecting to our postgres database and running SQL commands

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		SpringApplication.run(ToursApplication.class, args);
	}

	@Override
	public void run(String...strings) throws Exception {
		String sql = "INSERT INTO test(username) VALUES ('java')";

		int rows = jdbcTemplate.update(sql);
		if (rows > 0) {
			System.out.println("A new row has been inserted");
		}
	}

}
