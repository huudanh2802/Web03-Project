package com.web03backend.controller;

import com.web03backend.dto.TestDTO;
import com.web03backend.service.spec.ITestService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/test")
public class TestController {
    @Autowired
    private ITestService testService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<TestDTO>> findAll(@PageableDefault(size = 10, sort = {"id"}) Pageable pageable) {
        List<TestDTO> tests = testService.findAll(pageable).getContent().stream()
                .map(testEntity -> modelMapper.map(testEntity, TestDTO.class))
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(tests);
    }
}
