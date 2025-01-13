package com.web03backend.controller;

import com.web03backend.dto.note.NoteDTO;
import com.web03backend.dto.note.UpdateNoteDTO;
import com.web03backend.service.spec.INoteService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/note")
public class NoteController {
    @Autowired
    private INoteService noteService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<NoteDTO>> findNotesByUserId(Long userId,
                                                           @RequestParam(required = false)
                                                                         @PageableDefault(page = 0, size = 10,
                                                                                 sort = {"id"}) Pageable pageable) {
        List<NoteDTO> notes = noteService.findAllByUserId(userId, pageable).stream()
                .map(noteEntity -> modelMapper.map(noteEntity, NoteDTO.class))
                .collect(java.util.stream.Collectors.toList());

        return ResponseEntity.ok(notes);
    }

    @PostMapping
    public ResponseEntity<NoteDTO> createEmptyNoteByUser(Long userId) {
        NoteDTO note = modelMapper.map( noteService.createNoteByUserId(userId), NoteDTO.class);
        return ResponseEntity.ok(note);
    }

    @PutMapping
    public ResponseEntity<NoteDTO> updateNote(@RequestBody UpdateNoteDTO noteDTO) {
        NoteDTO note = modelMapper.map(noteService.updateNote(noteDTO), NoteDTO.class);
        return ResponseEntity.ok(note);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteNoteById(Long noteId){
        noteService.deleteNoteById(noteId);
        return ResponseEntity.ok().build();
    }
}
