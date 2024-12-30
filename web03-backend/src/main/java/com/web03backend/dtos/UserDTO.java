package com.web03backend.dtos;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserDTO {
    String username;
    String email;
    LocalDateTime createdAt;
    LocalDateTime updatedAt;
}
