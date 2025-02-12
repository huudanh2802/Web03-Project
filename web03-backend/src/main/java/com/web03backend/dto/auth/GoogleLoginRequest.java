package com.web03backend.dto.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
public class GoogleLoginRequest {
    @NotBlank
    private String name;

    @Setter
    @NotBlank
    private String email;

}
