package org.generation.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication//(exclude={DataSourceAutoConfiguration.class})
public class GsAccessingDataJpaApplication {

	public static void main(String[] args) {
		SpringApplication.run(GsAccessingDataJpaApplication.class, args);
	}
	
}
