package com.web03backend.repositories.spec;

import com.web03backend.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<UserEntity,Integer> {
}
