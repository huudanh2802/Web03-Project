package com.web03backend.dto.note;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GetNoteDTO {
    private long size;
    private List<NoteDTO> notes;

    public GetNoteDTO(long size, List<NoteDTO> notes) {
        this.size = size;
        this.notes = notes;
    }
}
