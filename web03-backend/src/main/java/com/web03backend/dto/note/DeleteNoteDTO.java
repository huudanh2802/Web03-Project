package com.web03backend.dto.note;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class DeleteNoteDTO {
    private Long id;
    public DeleteNoteDTO(Long id) {
        this.id = id;
    }
}
