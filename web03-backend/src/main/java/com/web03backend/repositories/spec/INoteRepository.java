package com.web03backend.repositories.spec;

import com.web03backend.domain.NoteEntity;
import com.web03backend.domain.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface INoteRepository extends JpaRepository<NoteEntity, Long> {
    List<NoteEntity> findByUserId(Long userId, Pageable pageable);

}
