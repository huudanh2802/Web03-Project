package com.web03backend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@Table(name="users")
public class UserEntity extends AbstractEntity<Integer> {
    private String username;
    private String password;
    private String email;
    private String avatar;

    public UserEntity(){
        super();
        username = "admin";
        password = "admin";
        email = "admin@admin.com";
        avatar ="http://admin.com/test.jpg";
    }
}

