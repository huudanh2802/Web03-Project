package com.web03backend.service.imp;

import com.web03backend.domain.TestEntity;
import com.web03backend.repositories.spec.ITestRepository;
import com.web03backend.service.spec.ITestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class TestService implements ITestService {
    @Autowired
    private ITestRepository testRepository;

    @Transactional(readOnly = true)
    public Page<TestEntity> findAll(Pageable pageable) {
        return testRepository.findAll(pageable);
    }
}
