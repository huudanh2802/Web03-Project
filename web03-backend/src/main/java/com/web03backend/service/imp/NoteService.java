package com.web03backend.service.imp;

import com.web03backend.domain.NoteEntity;
import com.web03backend.repositories.spec.INoteRepository;
import com.web03backend.service.spec.INoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class NoteService implements INoteService {
    @Autowired
    private INoteRepository noteRepository;

    @Transactional(readOnly = true)
    public Page<NoteEntity> findAll(Pageable pageable) {
        return noteRepository.findAll(pageable);
    }

    public List<NoteEntity> findAllByUserId(Pageable pageable, Long userId) {
        List<NoteEntity> notes =  noteRepository.findByUserId(userId, pageable);
        return notes;
    }

}
