package com.web03backend.dto.note;

public class CreateNoteDTO {
    private Long userId;

    public CreateNoteDTO(Long userId) {
        this.userId = userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public Long getUserId() {
        return userId;
    }
}
