package com.web03backend.security.services;

import com.web03backend.domain.UserEntity;
import com.web03backend.dto.auth.MessageResponse;
import com.web03backend.repositories.spec.IUserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    IUserRepository userRepository;

    @Transactional
    public UserDetails loadUserByEmail(String email) throws Exception {
        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new Exception("User Not Found with email: " + email));

        return CustomUserDetails.build(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        return CustomUserDetails.build(user);
    }

//    public UserDetails processOAuthPostLogin(String email) {
//        if (userRepository.existsByEmail(email)) {
//            return CustomUserDetails.build(userRepository.findByEmail((email)).orElseThrow(() -> new UsernameNotFoundException("User Not " +
//                    "Found with username: " + email)));
//        }
//        UserEntity user = new UserEntity(email, "abc", email);
//        userRepository.save(user);
//
//        return CustomUserDetails.build(user);
//    }


}
