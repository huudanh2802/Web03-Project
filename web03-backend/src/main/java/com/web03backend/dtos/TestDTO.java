package com.web03backend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class TestDTO {
    String name;
    LocalDateTime createdAt;
}
