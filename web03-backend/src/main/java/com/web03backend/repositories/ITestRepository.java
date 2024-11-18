package com.web03backend.repositories;

import com.web03backend.domain.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITestRepository extends JpaRepository<TestEntity, Integer> {
}
