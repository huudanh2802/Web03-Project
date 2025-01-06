package com.web03backend.repositories.spec;

import com.web03backend.domain.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITestRepository extends JpaRepository<TestEntity, Long> {
}
