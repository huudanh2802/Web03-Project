package com.web03backend.controller;

import com.web03backend.dto.auth.JwtResponse;
import com.web03backend.dto.note.ViewNoteDTO;
import com.web03backend.service.spec.INoteService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/note")
public class NoteController {
    @Autowired
    private INoteService noteService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<ViewNoteDTO>> findNotesByUserId(Long userId,
                                                               @PageableDefault(size = 10, sort = {"id"}) Pageable pageable) {
        List<ViewNoteDTO> notes = noteService.findAllByUserId(pageable, userId).stream()
                .map(noteEntity -> modelMapper.map(noteEntity, ViewNoteDTO.class))
                .collect(java.util.stream.Collectors.toList());

        return ResponseEntity.ok(notes);
    }
}
