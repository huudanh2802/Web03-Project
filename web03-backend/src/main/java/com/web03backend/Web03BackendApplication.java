package com.web03backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.web03backend.repositories")

public class Web03BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(Web03BackendApplication.class, args);
    }
}
