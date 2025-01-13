package com.web03backend.service.spec;

import com.web03backend.domain.NoteEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface INoteService {
    List<NoteEntity> findAllByUserId(Pageable pageable, Long userId);

}
