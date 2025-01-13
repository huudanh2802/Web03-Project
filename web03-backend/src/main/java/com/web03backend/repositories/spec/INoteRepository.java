package com.web03backend.repositories.spec;

import com.web03backend.domain.NoteEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface INoteRepository extends JpaRepository<NoteEntity, Long> {
    Page<NoteEntity> findByUserId(Long userId, Pageable pageable);

}
