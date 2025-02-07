package com.web03backend.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@Table(name="users",uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")
})
public class UserEntity extends AbstractEntity<Integer> {
    @Setter
    @Getter
    @NotBlank
    private String username;
    @Setter
    @Getter
    @NotBlank
    private String password;
    @Setter
    @Getter
    @NotBlank
    private String email;
    private String avatar;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, orphanRemoval = true)
    private List<NoteEntity> listNotes = new ArrayList<>();

    public UserEntity(){
        super();
    }

    public UserEntity(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

}

