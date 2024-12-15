package com.web03backend.controller;

import com.web03backend.dtos.TestDTO;
import com.web03backend.dtos.UserDTO;
import com.web03backend.service.imp.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<UserDTO>> findAll(@PageableDefault(size = 10, sort = {"id"}) Pageable pageable) {
        List<UserDTO> tests = userService.findAll(pageable).getContent().stream()
                .map(userEntity -> modelMapper.map(userEntity, UserDTO.class))
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(tests);
    }
}
