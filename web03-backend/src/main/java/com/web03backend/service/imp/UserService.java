package com.web03backend.service.imp;

import com.web03backend.domain.TestEntity;
import com.web03backend.domain.UserEntity;
import com.web03backend.repositories.spec.IUserRepository;
import com.web03backend.service.spec.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly= true)
public class UserService implements IUserService {
    @Autowired
    private IUserRepository userRepository;

    @Transactional(readOnly = true)
    public Page<UserEntity> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }
}
