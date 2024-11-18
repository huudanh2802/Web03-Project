package com.web03backend.service.spec;

import com.web03backend.domain.TestEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ITestService {
    Page<TestEntity> findAll(Pageable pageable);
}
