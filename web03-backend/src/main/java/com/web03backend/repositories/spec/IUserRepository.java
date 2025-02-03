package com.web03backend.repositories.spec;

import com.web03backend.domain.UserEntity;
import com.web03backend.security.services.CustomUserDetails;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<UserEntity,Long> {
    Optional<UserEntity> findByUsername(String username);
    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    CustomUserDetails findByEmail(@NotBlank String email);
}
