package com.web03backend.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name="note")
@Setter
@Getter
public class NoteEntity extends AbstractEntity{
    @ManyToOne
    private UserEntity user;

    @Column(columnDefinition = "TEXT")
    private String note;

    NoteEntity(String note){
        super();
        this.note = note;
    }
    public NoteEntity(){
        super();
    }
    public NoteEntity(UserEntity user){
        super();
        this.note="";
        this.user = user;
    }
}
