package org.renfang.model;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "password")
@Data
public class Password {
    @Id
    @Column(name="work_id")
    private int workId;

    @Column(name="password")
    private String password;



}
