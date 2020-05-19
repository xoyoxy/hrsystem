package org.renfang.model;

import lombok.Data;

import javax.persistence.Id;

@Data
public class Password {
    @Id
    private int id;

    private String password;




}
