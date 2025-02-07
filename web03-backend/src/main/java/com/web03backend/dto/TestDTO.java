package com.web03backend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TestDTO {
    String name;
    LocalDateTime createdAt;
}
